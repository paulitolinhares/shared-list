import React from 'react';

const renderLists = (lists, handleSelection) =>
  lists.map(list =>
    <li> <span onClick={() => handleSelection(list)}>{list.title}</span> </li>
  );

const Lists = ({ lists, handleSelection }) => {
  return (
    <aside className="column is-2">
      <h2>Lists</h2>
      <ul>
        { renderLists(lists, handleSelection) }
      </ul>
    </aside>
  );
};

export default Lists;
