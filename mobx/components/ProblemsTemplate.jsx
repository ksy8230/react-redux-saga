import React from 'react';
import styled from 'styled-components';

const ProblemsWrpper = styled.div`
  display:flex;
  section {
    width: 50%;
    padding: 15px;
    h2 {
      display:block;
      margin-bottom:10px;
      font-size:14px;
    }
  }
`;

const ProblemsTemplate = ({ lists, Relatedlists }) => {
  return (
    <ProblemsWrpper>
        <section>
            <h2>학습지 상세 편집</h2>
            {lists}
        </section>
        <section>
            <h2>문항 교체/추가</h2>
            {Relatedlists}
        </section>
  </ProblemsWrpper>
  );
};

export default ProblemsTemplate;