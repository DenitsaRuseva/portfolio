import React, { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const updateObject = (oldObj, updatedProperties) => {
  return {
    ...oldObj,
    ...updatedProperties
  }
};

export function checkValidity(value, rules){
  let isValid = true;
  if(!rules){
    return true;
  };
  if ( rules.required ) {
    isValid = value.trim() !== '' && isValid;
  };
  if(isValid && rules.minLength){
    isValid = value.length >= rules.minLength;
  };
  if(isValid && rules.maxLength){
    isValid = value.length <= rules.maxLength
  };
  if(isValid && rules.email && (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
    isValid = false
  };
  console.log(isValid)

  // if (isValid && rules.maxValue) {
  //     isValid = value < rules.maxValue;
  // };

  // if(isValid && rules.minValue) {
  //     isValid = value >= rules.minValue;
  // };
  return isValid;
};