import React, { useState } from 'react';
import { Addons, Finish, Personal, Plan, Summary } from './forms';

const Container = () => {
  const [forms, setForms] = useState([Personal, Plan, Addons, Summary, Finish]);
  const [formsIndex, setFormsIndex] = useState(0);
  const renderReactElement = forms[formsIndex]();

  const onHandleIndexDown = () => {
    if (formsIndex === 0) {
      return;
    }
    console.log('Clicked prev');
    setFormsIndex((prev) => prev - 1);
  };

  const onHandeIndexUp = () => {
    if (formsIndex === forms.length - 1) {
      return;
    }

    console.log('Clicked next');
    setFormsIndex((prev) => prev + 1);
  };

  return (
    <div className="container">
      <>{renderReactElement}</>
      <div>
        {formsIndex > 0 && <button onClick={() => onHandleIndexDown()}>prev</button>}
        {formsIndex < forms.length - 1 && <button onClick={() => onHandeIndexUp()}>next</button>}
      </div>
    </div>
  );
};

export default Container;
