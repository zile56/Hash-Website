import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import "../css/not-found.css";

export default function NotFound() {
  return (
    <section className="band not-found">
      <div className="shell">
        <p className="eyebrow">404 · INVARIANT RESOLUTION</p>
        <h1 className="display h1">
          Route <span className="sweep">Unresolved</span>.
        </h1>
        <p className="lede not-found__lede">
          The requested path does not map to any active endpoint or service within the Hash architecture.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Return to Core Architecture <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
