import React from 'react';

const ProbelmBox = ({
    v, i, selectId, onClickDeleteProblemBtn, onClickRelatedProblemBtn
}) => {
    return (
        <div className='problem-box'>
            <div className='problem-title'>
                <span>{v.problemType}</span>
                <p>
                    {
                        v.unitName.length > 17 ?
                            v.unitName.substr(0,17)+"..."
                            : v.unitName
                    }
                </p>
                <div className='btn'>
                    <button className={v.id === selectId || i === selectId ? 'active' : ''} onClick={() => onClickRelatedProblemBtn(v.id)}>유사문항</button>
                    <button onClick={() => onClickDeleteProblemBtn(v.id)}>삭제</button>
                </div>
            </div>
            <div className='problem-content'>
                <span className='numbering'>{i + 1}</span>
                <img src={v.problemURL} alt=""/>
            </div>
        </div>
    )
}

export default ProbelmBox;