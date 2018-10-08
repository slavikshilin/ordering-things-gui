export const CHANGE_FILTER = 'CHANGE_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export function changeFilter(filter) {
    return {
        type: CHANGE_FILTER,
        payload: filter
    }
}

export function clearFilter() {
    return {
        type: CLEAR_FILTER
    }
}