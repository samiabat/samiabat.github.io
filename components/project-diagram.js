export function ProjectDiagram({ type, title }) {
  if (type === "agent") {
    return (
      <div className="diagram diagram-agent" aria-hidden="true">
        <div className="diagram-pill">Planner</div>
        <div className="diagram-stack">
          <span>Memory</span>
          <span>Tool Router</span>
          <span>Terminal</span>
        </div>
        <div className="diagram-footer">
          <span>Redis</span>
          <span>Docker</span>
          <span>VFS</span>
        </div>
      </div>
    );
  }

  if (type === "stream") {
    return (
      <div className="diagram diagram-stream" aria-hidden="true">
        <div className="diagram-flow">
          <span>TTS</span>
          <span>RAG</span>
          <span>GPU</span>
          <span>Avatar</span>
        </div>
        <div className="diagram-wave"></div>
      </div>
    );
  }

  if (type === "cloud") {
    return (
      <div className="diagram diagram-cloud" aria-hidden="true">
        <div className="diagram-cloud__top">
          <span>API</span>
          <span>Escrow</span>
          <span>Ledger</span>
        </div>
        <div className="diagram-cloud__bottom">
          <span>Security</span>
          <span>Payments</span>
        </div>
      </div>
    );
  }

  if (type === "pipeline") {
    return (
      <div className="diagram diagram-pipeline" aria-hidden="true">
        <div className="diagram-flow">
          <span>Scrape</span>
          <span>Chunk</span>
          <span>Embed</span>
          <span>Generate</span>
        </div>
      </div>
    );
  }

  return (
    <div className="diagram diagram-rag" aria-hidden="true">
      <p>{title}</p>
      <div className="diagram-flow">
        <span>Docs</span>
        <span>Embeddings</span>
        <span>Vector DB</span>
        <span>Rerank</span>
        <span>Answer</span>
      </div>
    </div>
  );
}
