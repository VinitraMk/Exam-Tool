import {FETCH_INSTRUCTIONS} from '../constants/constants';
import { readInstructions } from '../actions/actions';

export default function fetchInstructions({dispatch}) {
    return function(next) {
        return function(action) {
            if(action.type===FETCH_INSTRUCTIONS) {
                fetch('https://api.myjson.com/bins/hubs8')
                .then(res=>res.json())
                .then(res=>{
                    dispatch(readInstructions(res));
                })
                //var data=require('../data/instructions.json');
                //dispatch(readInstructions(data));
            }
            return next(action);
        }
    }
}