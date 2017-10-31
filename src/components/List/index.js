import React from 'react';
import PropTypes from 'prop-types';

const renderItems = list => list.items.map(item => <li>{item.description}</li>);

const List = ({ list }) => (
  <div className="column List">
    <h2>{ list.title }</h2>
    <ul>
      { renderItems(list)}
    </ul>
    <form action="http://localhost:3000">
      <input type="text" placeholder="Add new item" />
      <button type="submit">Add</button>
    </form>
  </div>
);

List.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
    })),
  }),
};

List.defaultProps = {
  list: {},
};

export default List;
