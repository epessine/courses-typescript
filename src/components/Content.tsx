import React from 'react'
import Part from './Part';
import { CoursePart } from '../types/courseTypes';

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((part: CoursePart) =>
        <Part
          key={part.name}
          part={part}
        />
      )}
    </div>
  );
};

export default Content;