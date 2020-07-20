import React from 'react';

function Food({name, picture}){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src = {picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://img.danawa.com/prod_img/500000/100/698/img/8698100_1.jpg?shrink=500:500&_v=20190717160831',
  },
];

function renderFood(dish){
  return <Food name = {dish.name} picture = {dish.image}/>;
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
