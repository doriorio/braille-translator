import { ActionType } from '../action-types'

//TO DO - UPDATE ERR SCENARIO AND PAYLOAD TYPES

interface SearchStringAction {
    //type guard
    type: ActionType.SEARCH_STRING;
}

interface SearchStringSuccessAction {
    type: ActionType.SEARCH_STRING_SUCCESS;
    payload: string[]
}

interface SearchStringErrorAction {
    type: ActionType.SEARCH_STRING_ERROR;
    payload: string;
}

export type Action = SearchStringAction | SearchStringSuccessAction | SearchStringErrorAction