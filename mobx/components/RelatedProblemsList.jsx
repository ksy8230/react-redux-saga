import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react'; // 불러오기
import styled from 'styled-components';
import {ProblemsListWrap} from './styledComponents/ProblemListSC';
import { isEmpty, elipsis } from './FunctionalComponent';

const RelatedProblemsList = ({ relatedList, onAddItem, onSwitchItem }) => {
  return (
    <ProblemsListWrap> 
        {
          isEmpty(relatedList) ? 
          <>유사문제 버튼을 눌러주세요.</>:
            relatedList && relatedList.map((v,i) => {
                return (
                    <div className='problem-box' key={i}>
                      <div className='problem-title'>
                        <span>{v.problemType}</span>
                          <p>{elipsis(v.unitName)}</p>
                        <div className='btn'>
                          <button onClick={() => onAddItem(i)}>추가</button>
                          <button onClick={() => onSwitchItem(i)}>교체</button>
                        </div>
                      </div>
                      <div className='problem-content'>
                          <span className='numbering'>{i + 1}</span>
                          <img src={v.problemURL} alt=""/>
                      </div>
                    </div>
                )
            })
        }
    </ProblemsListWrap>
  );
};

export default inject(({ Problem }) => ({
    relatedList: Problem.relatedList,
    onAddItem: Problem.onAddItem,
    onSwitchItem: Problem.onSwitchItem
  }))(observer(RelatedProblemsList));