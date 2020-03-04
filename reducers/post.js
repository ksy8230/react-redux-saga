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
    switch(action.type) {
        // 문제들 로드 리듀서
        case LOAD_PROBLEMS_REQUEST :
            return {
                ...state,
            }
        case LOAD_PROBLEMS_SUCCESS :
            return {
                ...state,
                mainProblemLists : action.data,
            }
        case LOAD_PROBLEMS_FAILURE :
            return {
                ...state,
                loadProblemListsErrorReason : action.error,
            }
        // 유사 문제들 로드 리듀서
        case LOAD_SIMILAR_PROBLEMS_REQUEST :
            return {
                ...state,
            }
        case LOAD_SIMILAR_PROBLEMS_SUCCESS :
            return {
                ...state,
                similarProblemListsAdded : true,
                similarProblemLists : action.data,
            }
        case LOAD_SIMILAR_PROBLEMS_FAILURE :
            return {
                ...state,
                similarProblemListsAdded : false,
            }
        // 문제 삭제 리듀서
        case DELETE_PROBLEMS_REQUEST :
            return {
                ...state,
            }
        case DELETE_PROBLEMS_SUCCESS :
            return {
                ...state,
                mainProblemLists : state.mainProblemLists.filter(v => v.id !== action.data ),
            }
        case DELETE_PROBLEMS_FAILURE :
            return {
                ...state,
            }
        // 문제 추가 리듀서
        case ADD_PROBLEM_REQUEST :
            return {
                ...state,
            }
        case ADD_PROBLEM_SUCCESS : {
            const similarProblemLists = state.similarProblemLists;
            const mainProblemLists = state.mainProblemLists;
            const targetItem = similarProblemLists[action.data.similarIndex];
            const currentMainItem = mainProblemLists[action.data.mainIndex];
            // 현재 클릭된 문제 뒤에 추가할 유사문제 삽입
            mainProblemLists.splice(action.data.mainIndex+1, 0, targetItem);
            // 선택된 유사문제는 배열에서 삭제
            similarProblemLists.splice(action.data.similarIndex, 1);
            return {
                ...state,
                mainProblemLists,
                similarProblemLists
            }
        }
        case ADD_PROBLEM_FAILURE :
            return {
                ...state,
            }
        // 문제 교체 리듀서
        case SWITCH_PROBLEM_REQUEST :
            return {
                ...state,
            }
        case SWITCH_PROBLEM_SUCCESS : {
            const similarProblemLists = state.similarProblemLists;
            const mainProblemLists = state.mainProblemLists;
            const targetItem = similarProblemLists[action.data.similarIndex];
            const currentMainItem = mainProblemLists[action.data.mainIndex];
            // 현재 클릭된 문제 뒤에 추가할 유사문제 삽입
            mainProblemLists.splice(action.data.mainIndex+1, 0, targetItem);
            // 클릭된 문제는 메인 문제 배열에서 삭제
            mainProblemLists.splice(action.data.mainIndex,1);
            // 선택된 유사문제 뒤에 현재 클릭된 문제 삽입
            similarProblemLists.splice(action.data.similarIndex+1, 0, currentMainItem);
            // 선택된 유사문제는 유사 문제 배열에서 삭제
            similarProblemLists.splice(action.data.similarIndex,1);
            
            return {
                ...state,
                mainProblemLists,
                similarProblemLists
            }
        }
        case SWITCH_PROBLEM_FAILURE :
            return {
                ...state,
            }
        default : {
            return {
                ...state,
            }
        }
    }
};

export default postReducer;