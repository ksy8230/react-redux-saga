import React from 'react';

const SimilarProblemBox = ({
    v, i, onClickAddProblemBtn, onClickSwitchProblemBtn
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
                    <button onClick={() => onClickAddProblemBtn(v.id)}>추가</button>
                    <button onClick={() => onClickSwitchProblemBtn(i)}>교체</button>
                </div>
            </div>
            <div className='problem-content'>
                <span className='numbering'>{i + 1}</span>
                <img src={v.problemURL} alt=""/>
            </div>
        </div>
    )
}

export default SimilarProblemBox;