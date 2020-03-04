import { all, fork, put, takeLatest, call, throttle, delay } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_PROBLEMS_REQUEST, LOAD_PROBLEMS_SUCCESS, LOAD_PROBLEMS_FAILURE, LOAD_SIMILAR_PROBLEMS_REQUEST, LOAD_SIMILAR_PROBLEMS_SUCCESS, LOAD_SIMILAR_PROBLEMS_FAILURE, DELETE_PROBLEMS_REQUEST, DELETE_PROBLEMS_SUCCESS, DELETE_PROBLEMS_FAILURE, ADD_PROBLEM_REQUEST, ADD_PROBLEM_SUCCESS, ADD_PROBLEM_FAILURE, SWITCH_PROBLEM_REQUEST, SWITCH_PROBLEM_SUCCESS, SWITCH_PROBLEM_FAILURE } from '../reducers/post';

// 메인 문제 비동기
function loadProblemsAPI() {
    return axios.get('http://localhost:3000/problems');
}
function* loadProblems(action) {
    try {
        const result = yield call(loadProblemsAPI, action.data);
        yield put({
            type : LOAD_PROBLEMS_SUCCESS,
            data : result.data,
        })
    } catch(e) {
        yield put({
            type : LOAD_PROBLEMS_FAILURE,
            error : e.response,
        })
    }
}
function* watchLoadProblems() {
    yield takeLatest(LOAD_PROBLEMS_REQUEST, loadProblems);
}
// 유사 문항 비동기
function loadSimilarProblemsAPI() {
    return axios.get('http://localhost:3000/problems/similar');
}
function* loadSimilarProblems(action) {
    try {
        const result = yield call(loadSimilarProblemsAPI, action.data);
        yield put({
            type : LOAD_SIMILAR_PROBLEMS_SUCCESS,
            data : result.data,
        })
    } catch(e) {
        yield put({
            type : LOAD_SIMILAR_PROBLEMS_FAILURE,
            error : e,
        })
    }
}
function* watchLoadSimilarProblems() {
    yield takeLatest(LOAD_SIMILAR_PROBLEMS_REQUEST, loadSimilarProblems);
}
// 메인 문제 삭제 비동기
function* deleteProblem(action) {
    try {
        yield put({
            type : DELETE_PROBLEMS_SUCCESS,
            data : action.data,
        })
    } catch(e) {
        yield put({
            type : DELETE_PROBLEMS_FAILURE,
            error : e,
        })
    }
}
function* watchdeleteProblem() {
    yield takeLatest(DELETE_PROBLEMS_REQUEST, deleteProblem);
}
// 유사 문제 추가 비동기
function* addProblem(action) {
    try {
        yield put({
            type : ADD_PROBLEM_SUCCESS,
            data : action.data,
        })
    } catch(e) {
        yield put({
            type : ADD_PROBLEM_FAILURE,
            error : e,
        })
    }
}
function* watchaddProblem() {
    yield takeLatest(ADD_PROBLEM_REQUEST, addProblem);
}
// 문제 교체 비동기
function* switchProblem(action) {
    try {
        yield put({
            type : SWITCH_PROBLEM_SUCCESS,
            data : action.data,
        })
    } catch(e) {
        yield put({
            type : SWITCH_PROBLEM_FAILURE,
            error : e,
        })
    }
}
function* watchswitchProblem() {
    yield takeLatest(SWITCH_PROBLEM_REQUEST, switchProblem);
}
export default function* postSaga() {
    yield all([
        fork(watchLoadProblems),
        fork(watchLoadSimilarProblems),
        fork(watchdeleteProblem),
        fork(watchaddProblem),
        fork(watchswitchProblem),
    ]);
};