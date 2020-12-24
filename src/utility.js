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
  if(isValid && rules.maxLength){
    isValid = value.length <= rules.maxLength
  };
  if(isValid && rules.email && (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))){
    isValid = false
  };
  return isValid;
};