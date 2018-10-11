export const TOGGLE_LIGHTBOX = 'TOGGLE_LIGHTBOX';

export function toggleLightbox(idx) {
    return {
        type: TOGGLE_LIGHTBOX,
        payload: idx
    }
}
