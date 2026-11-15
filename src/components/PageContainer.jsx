import Ambience from "./Ambience";
import ScrollRail from "./ScrollRail";

/**
 * PageContainer — Root layout container for Hash web properties.
 * Enforces strict 1280px container rhythm, generative silk backdrop,
 * dynamic scroll-linked rail, and zero horizontal overflow.
 */
export default function PageContainer({ children, className = "" }) {
  return (
    <div className={`page-container ${className}`.trim()}>
      <Ambience />
      <ScrollRail />
      <div className="grid-veil" aria-hidden="true" />
      <div className="aurora" aria-hidden="true" />
      <main id="main" className="page-main">
        {children}
      </main>
    </div>
  );
}
