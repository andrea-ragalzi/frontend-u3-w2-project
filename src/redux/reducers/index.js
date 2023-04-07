const addFavourite = (values, valueToAdd) => {
    if (values.includes(valueToAdd)) {
        return [...values];
    }
    return [...values, valueToAdd];
}

const deleteFavourite = (values, valueToDelete) => {
    return values.filter(value => value !== valueToDelete);
}


const initialState = {
    weather: {
        city: 'Rome'
    }
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {
              ...state,
                weather: {
                    city: action.payload
                }
            }
        default:
            return state;
    }
};

export default mainReducer;
