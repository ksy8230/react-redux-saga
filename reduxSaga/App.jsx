import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_PROBLEMS_REQUEST, LOAD_SIMILAR_PROBLEMS_REQUEST, DELETE_PROBLEMS_REQUEST, ADD_PROBLEM_REQUEST, SWITCH_PROBLEM_REQUEST } from './reducers/post';
import { Wrapper } from './components/styledComponents/Layout';
import ProbelmBox from './components/ProbelmBox';
import SimilarProblemBox from './components/SimilarProblemBox';

const App = () => {

    const post = useSelector(state => state.post);
    const [selectId, setSelectId] = useState(''); // 현재 선택한 메인 문제 id 값 ex 144148
    const [selectIndex, setSelectIndex] = useState(''); // 현재 선택한 메인 문제 index 값
    const [activesimilar, setActivesimilar] = useState(false);
    const [similarName, setSimilarName] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type :  LOAD_PROBLEMS_REQUEST // 메인 문제 로드 이벤트 
        });
    }, []);

    const onClickRelatedProblemBtn = useCallback((i, index) => { // 유사 문제 로드 이벤트 
        dispatch({
            type :  LOAD_SIMILAR_PROBLEMS_REQUEST,
        });
        setSelectId(i);
        setSelectIndex(index);
        setActivesimilar(true);
    }, [selectId, selectIndex, activesimilar, post.mainProblemLists]);

    const onClickDeleteProblemBtn = useCallback((i) => { // 문제 삭제 이벤트 
        setSelectId('');
        setSelectIndex('');
        setActivesimilar(false);
        dispatch({
            type :  DELETE_PROBLEMS_REQUEST,
            data : i,
        });
    }, [selectId, selectIndex, activesimilar]);

    const onClickAddProblemBtn = useCallback((i) => { // 문제 추가 이벤트
        const mainProblemIndex = post.mainProblemLists && post.mainProblemLists.findIndex( v => v.id === selectId); // 메인문제 index값
        const similarProblemIndex = post.similarProblemLists.findIndex( v => v.id === i); // 유사문제 index값
        dispatch({
            type :  ADD_PROBLEM_REQUEST,
            data : {
                similarIndex : similarProblemIndex,
                mainIndex : mainProblemIndex
            },
        });
    }, [selectId, post.similarProblemLists, post.mainProblemLists]);

    const onClickSwitchProblemBtn = useCallback((i, id) => { // 문제 교체 이벤트
        setSelectId(id);
        const mainProblemIndex = post.mainProblemLists.findIndex( v => v.id === selectId);
        dispatch({
            type : SWITCH_PROBLEM_REQUEST,
            data : {
                mainIndex : mainProblemIndex,
                clickedIndex : i,
            }
        });
    }, [ selectId, post.mainProblemLists, post.similarProblemLists ]);

    useEffect(() => { // 유사문항 클릭시 우측 타이틀 변경
        const mainProblemIndex = post.mainProblemLists.findIndex( v => v.id === selectId);
        const mainProblemUnitName = post.mainProblemLists[mainProblemIndex] && post.mainProblemLists[mainProblemIndex].unitName;
        setSimilarName(mainProblemUnitName);
    }, [selectId, similarName, selectIndex]);

    return (
        <Wrapper>  
            {/* 학습지 상세편집 */}
            <div className="content main">
                <h2>학습지 상세 편집</h2>
                <div className='source-list '>
                    {
                        post && post.mainProblemLists.map((v,i) => {
                            return (
                                <ProbelmBox 
                                v={v}
                                i={i}
                                key={i}
                                selectId={selectId}
                                selectIndex={selectIndex}
                                onClickRelatedProblemBtn={onClickRelatedProblemBtn}
                                onClickDeleteProblemBtn={onClickDeleteProblemBtn}
                                />

                            )
                        })
                    }
                </div>
            </div>
            {/* 문항교체/추가화면 */}
            <div className="content similar">
                <h2>문항 교체/추가</h2>
                {
                    post.similarProblemListsAdded & activesimilar ?
                    <>
                        <div className='source-list'>
                            <div className='source-category'>
                                {similarName}
                            </div>
                            {
                                post.similarProblemLists.map((v,i) => {
                                    return (
                                        <SimilarProblemBox 
                                            v={v}
                                            i={i}
                                            key={i}
                                            selectId={selectId}
                                            onClickAddProblemBtn={onClickAddProblemBtn}
                                            onClickSwitchProblemBtn={onClickSwitchProblemBtn}
                                        />

                                    )
                                })
                            }
                        </div>
                    </>
                    : 
                    <div className='placeholder-wrap'>
                        <div className='placeholder'>
                            <button>유사문항</button> 버튼을 누르면 <br/>
                            해당 문제의 유사 문항을 볼 수 있습니다.
                        </div>
                    </div>
                }
            </div>
        </Wrapper>
    )
};

export default App;