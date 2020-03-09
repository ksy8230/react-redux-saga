import produce from 'immer';

const initialState = {
    mainProblemLists : [],
    similarProblemLists : [],
    similarProblemListsAdded : false,
    loadProblemListsErrorReason : '',
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
// 문제들 로드 액션
export const LOAD_PROBLEMS_REQUEST = 'LOAD_PROBLEMS_REQUEST';
export const LOAD_PROBLEMS_SUCCESS = 'LOAD_PROBLEMS_SUCCESS';
export const LOAD_PROBLEMS_FAILURE = 'LOAD_PROBLEMS_FAILURE';
// 유사 문제들 로드 액션
export const LOAD_SIMILAR_PROBLEMS_REQUEST = 'LOAD_SIMILAR_PROBLEMS_REQUEST';
export const LOAD_SIMILAR_PROBLEMS_SUCCESS = 'LOAD_SIMILAR_PROBLEMS_SUCCESS';
export const LOAD_SIMILAR_PROBLEMS_FAILURE = 'LOAD_SIMILAR_PROBLEMS_FAILURE';
// 문제 삭제 액션
export const DELETE_PROBLEMS_REQUEST = 'DELETE_PROBLEMS_REQUEST';
export const DELETE_PROBLEMS_SUCCESS = 'DELETE_PROBLEMS_SUCCESS';
export const DELETE_PROBLEMS_FAILURE = 'DELETE_PROBLEMS_FAILURE';
// 문제 추가 액션
export const ADD_PROBLEM_REQUEST = 'ADD_PROBLEM_REQUEST';
export const ADD_PROBLEM_SUCCESS = 'ADD_PROBLEM_SUCCESS';
export const ADD_PROBLEM_FAILURE = 'ADD_PROBLEM_FAILURE';
// 문제 교체 액션
export const SWITCH_PROBLEM_REQUEST = 'SWITCH_PROBLEM_REQUEST';
export const SWITCH_PROBLEM_SUCCESS = 'SWITCH_PROBLEM_SUCCESS';
export const SWITCH_PROBLEM_FAILURE = 'SWITCH_PROBLEM_FAILURE';

const postReducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            // 문제들 로드 리듀서
            case LOAD_PROBLEMS_REQUEST :
                break;
            case LOAD_PROBLEMS_SUCCESS :
                draft.mainProblemLists = action.data;
                break;
            case LOAD_PROBLEMS_FAILURE :
                draft.loadProblemListsErrorReason = action.error;
                break;
            // 유사 문제들 로드 리듀서
            case LOAD_SIMILAR_PROBLEMS_REQUEST :
                break;
            case LOAD_SIMILAR_PROBLEMS_SUCCESS :
                draft.similarProblemListsAdded = true;
                draft.similarProblemLists = action.data;
                break;
            case LOAD_SIMILAR_PROBLEMS_FAILURE :
                draft.similarProblemListsAdded = false;
                break;
            // 문제 삭제 리듀서
            case DELETE_PROBLEMS_REQUEST :
                break;
            case DELETE_PROBLEMS_SUCCESS : {
                const index = draft.mainProblemLists.findIndex((v,i) => i === action.data);
                draft.mainProblemLists.splice(index, 1);
                break;
            }
            case DELETE_PROBLEMS_FAILURE :
                break;
            // 문제 추가 리듀서
            case ADD_PROBLEM_REQUEST :
                break;
            case ADD_PROBLEM_SUCCESS : {
                const targetItem = draft.similarProblemLists[action.data.similarIndex];
                draft.mainProblemLists.splice(action.data.mainIndex+1, 0, targetItem);
                draft.similarProblemLists.splice(action.data.similarIndex, 1);
                break;
            }
            case ADD_PROBLEM_FAILURE :
                break;
            // 문제 교체 리듀서
            case SWITCH_PROBLEM_REQUEST :{
                break;
            }
            case SWITCH_PROBLEM_SUCCESS : {
                const targetItem = draft.similarProblemLists[action.data.clickedIndex];
                const currentMainItem = draft.mainProblemLists[action.data.mainIndex];
                draft.mainProblemLists.splice(action.data.mainIndex, 1, targetItem);
                draft.similarProblemLists.splice(action.data.clickedIndex, 1, currentMainItem);
                break;
            }
            case SWITCH_PROBLEM_FAILURE :
                break;
            default : {
                break;
            }
        }
    });

};

export default postReducer;