import React from 'react';
import ProblemsTemplate from './ProblemsTemplate';
import ProblemsList from './ProblemsList';
import RelatedProblemsList from './RelatedProblemsList';

const Problems = ({  }) => {
  return (
      <ProblemsTemplate 
          lists={<ProblemsList />}
          Relatedlists={<RelatedProblemsList />}
      />
  );
};

export default Problems;