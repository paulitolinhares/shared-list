import React from 'react';

const List = () => {
  return (
    <div className="column List">
      <h2>List name</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
      <form action="javascript:">
        <input type="text" placeholder="Add new item"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default List;
