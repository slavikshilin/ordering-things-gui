export const TOGGLE_LIGHTBOX = 'TOGGLE_LIGHTBOX';

export function toggleLightbox(item) {
    return {
        type: TOGGLE_LIGHTBOX,
        payload: item
    }
}
