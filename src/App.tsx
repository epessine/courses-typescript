import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import { courseParts } from './resources/course';

const App = () => {
  const total = courseParts.reduce((carry, part) => carry + part.exerciseCount, 0);

  return (
    <div>
      <Header name={"Half Stack application development"} />
      <Content parts={courseParts} />
      <Total total={total} />
    </div>
  );
};

export default App;
