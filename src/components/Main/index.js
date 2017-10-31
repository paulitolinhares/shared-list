import React, { Component } from 'react';
import './style.css';
import Lists from '../Lists/index';
import List from '../List/index';
import lists from '../../example.json';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: undefined,
    };

    this.selectList = this.selectList.bind(this);
  }

  selectList(list) {
    this.setState({
      currentList: list,
    });
  }

  render() {
    const { currentList } = this.state;
    return (
      <main className="Main columns">
        <Lists lists={lists} handleSelection={this.selectList} />
        { currentList && <List list={currentList} /> }
      </main>
    );
  }
}

export default Main;
