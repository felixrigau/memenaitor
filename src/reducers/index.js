import { UPDATE_SELECTED_ELEMENT, CREATE_TEXT, UPDATE_TEXT, UPDATE_FONTSIZE, UPDATE_LOCATION, UPDATE_COLOR, UPDATE_SHADOW_COLOR } from '../actions';

const initialState = {
    texts: {
        list: [],
    },
    selectedElement: {},
    image: '',
};

const setNewLocation = (text, newLocation) => {
    if (newLocation.left && newLocation.top) {
        text.location.left += newLocation.left;
        text.location.top += newLocation.top;
    } else {
        if (newLocation.left) {
            text.location.left += newLocation.left-text.location.left;
        }
        if (newLocation.top) {
            text.location.top += newLocation.top-text.location.top;
        }
    }
    return {...text};
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_ELEMENT:
            return { ...state, selectedElement: action.payload };
        case CREATE_TEXT:
            return { ...state, texts: { ...state.texts, list: [...state.texts.list, action.payload] } };
        case UPDATE_TEXT:
            return {
                ...state,
                texts: {
                    ...state.texts,
                    list: state.texts.list.map(text => {
                        return text.id === state.selectedElement.id ? {...text, text: action.payload} : text;
                    }),
                },
            };
        case UPDATE_FONTSIZE:
            return {
                ...state,
                texts: {
                    ...state.texts,
                    list: state.texts.list.map(text => {
                        return text.id === state.selectedElement.id ? {...text, fontSize: action.payload} : text;
                    }),
                },
            };
        case UPDATE_LOCATION:
            return {
                ...state,
                texts: {
                    ...state.texts,
                    list: state.texts.list.map(text => {
                        return text.id === state.selectedElement.id ? setNewLocation(text, action.payload) : text;
                    }),
                },
            };
        case UPDATE_COLOR:
            return {
                ...state,
                texts: {
                    ...state.texts,
                    list: state.texts.list.map(text => {
                        return text.id === state.selectedElement.id ? {...text, color: action.payload} : text;
                    }),
                },
            };
        case UPDATE_SHADOW_COLOR:
            return {
                ...state,
                texts: {
                    ...state.texts,
                    list: state.texts.list.map(text => {
                        return text.id === state.selectedElement.id ? {...text, shadowColor: action.payload} : text;
                    }),
                },
            };
        default:
            return state;
    }
};
