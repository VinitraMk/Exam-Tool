import { START_TIMER, DECREMENT_TIMER, SET_TIMER } from "../constants/constants"
import { decrementTimer, stopTimer, startTimer } from "../actions/actions";
var intervalFunc=null;
export default function manageTimer({dispatch,getState}) {
    return function(next) {
        return function(action) {
            if(action.type===START_TIMER) {
                console.log("setting dec");
            }
            else if(action.type===DECREMENT_TIMER) {
                console.log("dec middle");
                var state=getState();
                if(state.secondsLeft===0) {
                    clearInterval(intervalFunc);
                }
            }
            return next(action);
        }
    }
}
