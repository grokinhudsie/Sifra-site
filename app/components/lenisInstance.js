let instance = null;
const listeners = new Set();

export function setLenis(lenis) {
  instance = lenis;
  listeners.forEach((fn) => fn(lenis));
}

export function getLenis() {
  return instance;
}

export function onLenis(fn) {
  listeners.add(fn);
  if (instance) fn(instance);
  return () => listeners.delete(fn);
}
