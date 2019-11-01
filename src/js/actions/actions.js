import {ADD_USER,READ_INSTRUCTIONS,FETCH_INSTRUCTIONS,FETCH_QUESTIONS,READ_QUESTIONS, SUBMIT_ANSWERS, SET_COUNTS, COMPUTE_RESULTS, SET_SCORE, START_TIMER, DECREMENT_TIMER, STOP_TIMER } from "../constants/constants"

export function addUser(payload) {
    return {
        type:ADD_USER,
        payload
    }
}

export function fetchInstructions() {
    return {
        type:FETCH_INSTRUCTIONS
    }
}

export function readInstructions(payload) {
    return {
        type:READ_INSTRUCTIONS,
        payload
    }
}

export function fetchQuestions() {
    return {
        type:FETCH_QUESTIONS
    }
}

export function readQuestions(payload) {
    return {
        type:READ_QUESTIONS,
        payload
    }
}

export function submitAnswers(payload) {
    return {
        type:SUBMIT_ANSWERS,
        payload
    }
}

export function setCounts(payload) {
    return {
        type:SET_COUNTS,
        payload
    }
}

export function computeResults(payload) {
    return {
        type:COMPUTE_RESULTS,
        payload
    }
}

export function setScore(payload) {
    return {
        type:SET_SCORE,
        payload
    }
}
