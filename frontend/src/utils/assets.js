import { backend, port } from "../backend_url";

export const getAssetUrl = (path) => {
  const BACKEND_HOST = backend || window.location.hostname;
  const PORT = port || "8000";
  const BACKEND = `http://${BACKEND_HOST}:${PORT}`;
  const DEFAULT_ART = `/assets/album-arts/song-icon5.png`;

  if (!path || path === "None" || path === "null" || path === "undefined") return null;
  if (path.startsWith("http")) return path;

  // Normalize legacy paths and singular/plural mismatches
  let cleanPath = path
    .replace(/^\/+/, "") // Remove leading slashes first
    .replace(/^\.\.\/\.\.\/Assets\/Images\//i, "") // Remove legacy Assets/Images/ prefix
    .replace(/^\.\.\/\.\.\//, "") // Remove relative dots
    .replace(/^assets\//i, "") // Remove existing assets/ prefix
    .replace(/^playlist-poster\//i, "playlist-posters/") // Fix singular/plural mismatch
    .replace(/^album-art\//i, "album-arts/") // Fix singular/plural mismatch
    .replace(/^artist-image\//i, "artist-images/") // Fix singular/plural mismatch
    .replace(/^\/+/, ""); // Remove leading slashes again if needed

  // Ensure we are pointing to the backend's /assets mount point
  return path ? `${BACKEND}/assets/${cleanPath}` : null;
};
