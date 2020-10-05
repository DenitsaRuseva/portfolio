import { useEffect, useRef } from 'react';
import axios from 'axios';

export function fetchData(url, cb){
  axios.get(url)
  .then(res => cb(res.data))
  .catch(err => {console.log(err);cb(null, err)});
};

// export function fetchAll(cb){
//   const url = 'https://portfolio-f96f5.firebaseio.com/all.json';
//   fetchData(url, cb);
// };

export function useInterval(callback, delay, stopInterval) {
 console.log(stopInterval)
  const lastIntervalId = useRef(null);
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
      console.log(stopInterval)

      if(stopInterval === true){
        clearInterval(lastIntervalId.current);
      };
      // let id = setInterval(tick, delay);
      lastIntervalId.current = setInterval(tick, delay);
      return () => clearInterval(lastIntervalId.current);
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

  // if (isValid && rules.maxValue) {
  //     isValid = value < rules.maxValue;
  // };

  // if(isValid && rules.minValue) {
  //     isValid = value >= rules.minValue;
  // };
  return isValid;
};