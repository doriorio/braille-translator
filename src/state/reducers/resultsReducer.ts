import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ResultsState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
};

const reducer = (
    state: ResultsState = initialState, action: Action 
    ): ResultsState => {
    switch (action.type) {
        //Switch statements are type guards
        case ActionType.SEARCH_STRING: 
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_STRING_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_STRING_ERROR:
                return { loading: false, error: action.payload , data: [] };;
        default: 
            return state;
    }
};

export default reducer;