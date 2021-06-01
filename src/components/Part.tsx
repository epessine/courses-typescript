import React from 'react';
import { CoursePart } from '../types/courseTypes';
import { assertNever } from '../utils';

const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case 'normal':
      return (
        <p>
          <span><b>{ `${part.name} ${part.exerciseCount}` }</b></span><br />
          <span><i>{ part.description }</i></span>
        </p>
      );
    
    case 'groupProject':
      return (
        <p>
          <span><b>{ `${part.name} ${part.exerciseCount}` }</b></span><br />
          <span>{ `project exercises ${part.groupProjectCount}` }</span>
        </p>
      );
    
    case 'submission':
      return (
        <p>
          <span><b>{ `${part.name} ${part.exerciseCount}` }</b></span><br />
          <span><i>{ part.description }</i></span><br />
          <span>{ `submit to ${part.exerciseSubmissionLink}` }</span>
        </p>
      );
  
    default:
      return assertNever(part);
  }
}

export default Part;