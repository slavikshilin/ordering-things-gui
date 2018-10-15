export const THING_ADD_DEFAULT = 'THING_ADD_DEFAULT';
export const THING_ADD_OK = 'THING_ADD_OK';
export const THING_ADD_CANCEL = 'THING_ADD_CANCEL';
export const THING_ADD_CHANGE = 'THING_ADD_CHANGE';

export function thingAddDefault(defaultThing) {
    return {
        type: THING_ADD_DEFAULT,
        payload: defaultThing
    }
}

export function thingAddOk() {
    return {
        type: THING_ADD_OK
    }
}

export function thingAddCancel() {
    return {
        type: THING_ADD_CANCEL
    }
}

export function thingAddChange(thing) {
    return {
        type: THING_ADD_CHANGE,
        payload: thing
    }
}
