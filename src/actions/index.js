export const UPDATE_SELECTED_ELEMENT = 'UPDATE_SELECTED_ELEMENT';

export const updateSelectedElement = payload => ({
    type: UPDATE_SELECTED_ELEMENT,
    payload: payload,
});

export const CREATE_TEXT = 'CREATE_TEXT';

export const createText = payload => ({
    type: CREATE_TEXT,
    payload: payload,
});

export const UPDATE_TEXT = 'UPDATE_TEXT';

export const updateText = payload => ({
    type: UPDATE_TEXT,
    payload: payload,
});

export const UPDATE_FONTSIZE = 'UPDATE_FONTSIZE';

export const updateFontSize = payload => ({
    type: UPDATE_FONTSIZE,
    payload: payload,
});

export const UPDATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = payload => ({
    type: UPDATE_LOCATION,
    payload: payload,
});

export const UPDATE_COLOR = 'UPDATE_COLOR';

export const updateColor = payload => ({
    type: UPDATE_COLOR,
    payload: payload,
});

export const UPDATE_SHADOW_COLOR = 'UPDATE_SHADOW_COLOR';

export const updateShadowColor = payload => ({
    type: UPDATE_SHADOW_COLOR,
    payload: payload,
});
