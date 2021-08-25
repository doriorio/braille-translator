import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

//TO DO - MAKE A UTILS FOLDER FOR INSERT
function insert(str: string, index: number, value: string) {
    return str.substr(0, index) + value + str.substr(index);
}


export const searchInput = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_STRING,
        });

        try {
            // const { data } = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${term}`);
            const { data } = await axios.get(`https://api.funtranslations.com/translate/braille/image.json?text=${term}`);

            console.log(data);
            
            // const names = data.objects.map((result: any) =>{
            const names = data.contents.translated.map((result: any) =>{
                // return result.package.name;
                var addn = 'https://funtranslations.com';
                if (result.indexOf('src=') !== -1){
                    result = insert(result, (result.indexOf("src='")+5), addn);

                }
                return result;
                // return newstr;
            });

            dispatch({
                type: ActionType.SEARCH_STRING_SUCCESS,
                payload: names
            });
            
        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_STRING_ERROR,
                payload: err.message
            });
        }
    };
};