export const getAssetUrl = (path) => {
    const BACKEND_HOST = window.location.hostname;
    const BACKEND = `http://${BACKEND_HOST}:8000`;
    const DEFAULT_ART = `${BACKEND}/assets/album-arts/default-art.jpg`;

    if (!path) return DEFAULT_ART;
    if (path.startsWith('http')) return path;

    // Normalize legacy paths and singular/plural mismatches
    let cleanPath = path
        .replace(/^\.\.\/\.\.\/Assets\/Images\//i, '') // Remove legacy Assets/Images/ prefix
        .replace(/^\.\.\/\.\.\//, '')                  // Remove relative dots
        .replace(/^assets\//i, '')                     // Remove existing assets/ prefix
        .replace(/^playlist-poster\//i, 'playlist-posters/') // Fix singular/plural mismatch
        .replace(/^album-art\//i, 'album-arts/')           // Fix singular/plural mismatch
        .replace(/^artist-image\//i, 'artist-images/')       // Fix singular/plural mismatch
        .replace(/^\/+/, '');                          // Remove leading slashes

    // Ensure we are pointing to the backend's /assets mount point
    return `${BACKEND}/assets/${cleanPath}`;
};
