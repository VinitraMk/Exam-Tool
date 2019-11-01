import React from 'react';
import { COMPUTE_RESULTS } from '../constants/constants';
import {setScore} from '../actions/actions';

export default function computeResults({dispatch}) {
    return function(next) {
        return function(action) {
            if(action.type===COMPUTE_RESULTS) {
                var questions=action.payload.questions;
                var answers=action.payload.answers;
                var n=action.payload.noOfQuestions;
                var score=0;

                console.log('in compute results');

                for(var i=0;i<n;i++) {
                    console.log(questions[i].answers);
                    if(JSON.stringify(questions[i].answers)===JSON.stringify(answers[i])) {
                        score+=1;
                    }
                }
                var percentage=(score/n)*100;
                console.log(score+","+percentage);
                var isPass=false;
                {percentage>=70.0?isPass=true:isPass=false}
                dispatch(setScore({score,isPass}));
            }
            return next(action);
        }
    }
}