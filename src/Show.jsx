import React, { useRef, useEffect } from 'react';

const Show = ({ name, age, gender }) => {
  const inputRef = useRef();
  const pRef = useRef();

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.className = 'input-class';
    pRef.current.style.color = 'red';
  }, []);

  return (
    <>
      <p ref={pRef}>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{API_KEY}</p>
      <input type='text' ref={inputRef} />
    </>
  );
};

export default Show;
