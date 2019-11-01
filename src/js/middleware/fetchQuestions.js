import {FETCH_QUESTIONS} from '../constants/constants';
import {readQuestions} from '../actions/actions';

export default function fetchQuestions({dispatch}) {
    return function(next) {
        return function(action) {
            if(action.type===FETCH_QUESTIONS) {
                fetch('https://api.myjson.com/bins/92bh0')
                .then(res=>res.json())
                .then(res=>{
                    dispatch(readQuestions(res));
                })
                //var data=require('../data/data.json');
                //dispatch(readQuestions(data));
                
            }
            return next(action);
        }
    }
}