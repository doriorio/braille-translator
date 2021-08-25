import { combineReducers } from 'redux';
import reducer from './resultsReducer';

const reducers = combineReducers({
    results: reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;