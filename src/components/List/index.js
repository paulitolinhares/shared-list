import React from 'react';

const renderItems = list => list.items.map(item => <li>{item.description}</li>);

const List = ({ list }) => {
  return (
    <div className="column List">
      <h2>{ list.title }</h2>
      <ul>
        { renderItems(list)}
      </ul>
      <form action="javascript:">
        <input type="text" placeholder="Add new item"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default List;
