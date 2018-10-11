import { TOGGLE_LIGHTBOX } from '../actions/galleryActions'

const initialState = {
    show: false,
    selectedImage: 0
}

export function galleryReducer(state = initialState, action) {
    switch (action.type) {

        case TOGGLE_LIGHTBOX:
            {
                let newState = { ...state, show: !state.show, selectedImage: action.payload }
                return newState
            }        

        default:
            return state
    }
}