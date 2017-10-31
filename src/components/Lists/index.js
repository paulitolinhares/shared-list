import React from 'react';
import PropTypes from 'prop-types';

const renderLists = (lists, handleSelection) =>
  lists.map(list =>
    <li> <button href="#" onClick={() => handleSelection(list)}>{list.title}</button> </li>);

const Lists = ({ lists, handleSelection }) => (
  <aside className="column is-2">
    <h2>Lists</h2>
    <ul>
      { renderLists(lists, handleSelection) }
    </ul>
  </aside>
);

Lists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
  handleSelection: PropTypes.func,
};

Lists.defaultProps = {
  lists: [],
  handleSelection: () => { console.log('no handleSelection provided'); },
};

export default Lists;
