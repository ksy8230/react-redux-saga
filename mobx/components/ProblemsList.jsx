import React from 'react';
import { inject, observer } from 'mobx-react'; // 불러오기
import styled from 'styled-components';
import {ProblemsListWrap} from './styledComponents/ProblemListSC';
import { elipsis } from './FunctionalComponent';

const Button = styled.button`
    &.on {
        color:#fff;
        background:#00ABFF;
    }
`;

const ProblemsList = ({ list, onPutRelatedLists, clickedId, onRemoveItem, clickedIndex }) => {
  return (
    <ProblemsListWrap> 
      {
          list && list.map((v,i) => {
              return (
                <div className='problem-box'>
                  <div className='problem-title'>
                    <span>{v.problemType}</span>
                    <p>{elipsis(v.unitName)}</p>
                    <div className='btn'>
                      <Button className={clickedId === v.id || i === clickedIndex ? 'on' : null} onClick={() => onPutRelatedLists(i)}>유사문제</Button>
                      <Button onClick={() => onRemoveItem(i)}>삭제</Button>
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
    list: Problem.list,
    onPutRelatedLists: Problem.putRelatedLists,
    clickedId : Problem.clickedId,
    onRemoveItem : Problem.onRemoveItem,
    clickedIndex : Problem.clickedIndex,
  }))(observer(ProblemsList));