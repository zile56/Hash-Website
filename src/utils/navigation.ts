export function navigateTo(target: string, e?: React.MouseEvent) {
  if (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
  }

  const [rawPath, hash] = target.split('#');
  const nextPath = rawPath || '/';
  const nextUrl = hash ? `${nextPath}#${hash}` : nextPath;

  if (window.location.pathname !== nextPath || (hash && window.location.hash !== `#${hash}`)) {
    window.history.pushState({}, '', nextUrl);
  }

  window.dispatchEvent(new CustomEvent('hash-route-change', { detail: { path: nextPath, hash: hash || '' } }));
}
