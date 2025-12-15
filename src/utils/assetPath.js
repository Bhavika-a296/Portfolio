// Utility to get correct asset paths for GitHub Pages
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
