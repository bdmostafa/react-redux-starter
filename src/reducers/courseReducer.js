import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            // This is not correct because state is immutable in Redux
            // state.push(action.course); 
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}