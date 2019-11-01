import { ADD_USER, READ_INSTRUCTIONS, READ_QUESTIONS, SUBMIT_ANSWERS, SET_COUNTS, COMPUTE_RESULTS, SET_SCORE } from "../constants/constants"

const initialState = {
    user:{},
    noOfInstructions:0,
    noOfQuestions:0,
    instructions:{},
    questions:{},
    answers:[],
    unansweredCount:0,
    answeredCount:0,
    reviewCount:0,
    score:0,
    isPass:false
}


function rootReducer(state=initialState,action) {
    if(action.type===ADD_USER) {
        return Object.assign({},state,{
            user:{
                name:action.payload.name,
                phone:action.payload.phone
            }
        })
    }
    else if(action.type===READ_INSTRUCTIONS) {
        console.log(action.payload.instructions);
        var n=0;
        for(var obj in action.payload.instructions) {
            n++;
        }
        return Object.assign({},state,{
            noOfInstructions:n,
            instructions:action.payload.instructions
        })
    }
    else if(action.type===READ_QUESTIONS) {
        return Object.assign({},state,{
            questions:action.payload.questions,
            noOfQuestions:action.payload.questioncount,
            unansweredCount:action.payload.questioncount,
            answers:Array(action.payload.questioncount).fill([])
        })
    }
    else if(action.type===SUBMIT_ANSWERS) {
        var answers=state.answers;
        var questions=state.questions;
        answers[action.payload.index]=action.payload.options;
        questions[action.payload.index]['to-be-reviewed']=action.payload['to-be-reviewed'];
        questions[action.payload.index]['isanswered']=action.payload.isanswered;
        return Object.assign({},state,{
            questions:questions,
            answers:answers
        })
    }
    else if(action.type===SET_COUNTS) {
        return Object.assign({},state,{
            answeredCount:action.payload.answeredCount,
            unansweredCount:action.payload.unansweredcount,
            reviewCount:action.payload.toReviewCount
        })
    }
    else if(action.type===SET_SCORE) {
        return Object.assign({},state,{
            score:action.payload.score,
            isPass:action.payload.isPass
        })
    }
    
    return state
}

export default rootReducer