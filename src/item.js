import React from 'react';

const item = ({ item, action, title }) => (
  <div className="content-item" key={item.id}>
    <h4>{item.title}</h4>
    <img src={item.img} alt={item.title} />
    <button onClick={() => action(item)}>{title}</button>
  </div>
)

export default item;
