"use client";

import { useEffect, useMemo, useState } from "react";

function formatCount(value) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return `${value}`;
}

export function GitHubSnapshot() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch("https://api.github.com/users/samiabat"),
          fetch("https://api.github.com/users/samiabat/repos?per_page=100&sort=updated"),
        ]);

        const [profileJson, reposJson] = await Promise.all([
          profileResponse.json(),
          reposResponse.json(),
        ]);

        if (!cancelled) {
          setProfile(profileJson);
          setRepos(Array.isArray(reposJson) ? reposJson : []);
        }
      } catch (_error) {
        if (!cancelled) {
          setRepos([]);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = useMemo(() => {
    const totalStars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count || 0),
      0
    );
    const pinned = [...repos]
      .filter((repo) => repo.name !== "samiabat.github.io")
      .sort(
        (a, b) =>
          (b.stargazers_count || 0) - (a.stargazers_count || 0) ||
          new Date(b.updated_at) - new Date(a.updated_at)
      )
      .slice(0, 4);

    return { totalStars, pinned };
  }, [repos]);

  return (
    <div className="github-panel">
      <div className="github-panel__summary">
        <p className="section-kicker">GitHub Activity</p>
        <h3>Open source footprint and current profile metrics.</h3>
        <p className="section-copy">
          This panel loads live GitHub profile data at runtime so the portfolio
          stays current without manual updates.
        </p>
      </div>

      <div className="github-grid">
        <article className="github-card github-card--profile">
          {profile?.avatar_url ? (
            <img
              className="github-avatar"
              src={profile.avatar_url}
              alt="Samuel Abatneh GitHub avatar"
            />
          ) : null}
          <div>
            <h4>{profile?.name || "Samuel Abatneh"}</h4>
            <p>{profile?.bio || "Software Engineer"}</p>
            <a href="https://github.com/samiabat" target="_blank" rel="noreferrer">
              github.com/samiabat
            </a>
          </div>
        </article>

        <article className="github-card">
          <span className="metric-label">Followers</span>
          <strong>{profile ? formatCount(profile.followers || 0) : "--"}</strong>
        </article>

        <article className="github-card">
          <span className="metric-label">Public Repos</span>
          <strong>{profile ? formatCount(profile.public_repos || 0) : "--"}</strong>
        </article>

        <article className="github-card">
          <span className="metric-label">Total Stars</span>
          <strong>{repos.length ? formatCount(stats.totalStars) : "--"}</strong>
        </article>
      </div>

      <div className="repo-grid">
        {stats.pinned.map((repo) => (
          <a
            key={repo.id}
            className="repo-card"
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <p>{repo.name}</p>
            <span>{repo.language || "Code"}</span>
          </a>
        ))}
      </div>

      <div className="contribution-panel">
        <p className="section-kicker">Contribution Graph</p>
        <img
          className="contribution-graph"
          src="https://ghchart.rshah.org/2563eb/samiabat"
          alt="GitHub contribution graph for Samuel Abatneh"
        />
      </div>
    </div>
  );
}
