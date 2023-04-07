
const initialState = {
    weather: {
        city: ''
    }
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {
                weather: {
                    city: action.payload
                }
            }
        default:
            return state;
    }
};

export default mainReducer;
