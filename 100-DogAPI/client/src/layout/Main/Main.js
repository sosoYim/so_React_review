import React, { useState, useEffect } from 'react';
const axios = require('axios');
export function Main() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(({ data }) => {
        const { message: dog } = data;
        setDog(dog);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <button>개 사진 받기!</button>
      <div>
        <img src={dog} alt='개사진' />
      </div>
    </div>
  );
}
