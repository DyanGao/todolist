import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
    <Fragment>
      <div>
        <label htmlFor="insertArea">Please insert task</label>
        <input
          id="insertArea"
          className='input' 
          value={this.state.inputValue}
          onChange= {this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
      </div>
      <ul>
        {
          this.state.list.map((item, index) => {
            return (
              <div>
                <TodoItem 
                  content={item} 
                  index={index}
                  deleteItem={this.handleItemDelete.bind(this)}
                />
              </div>
            )
          })
        }
      </ul>
    </Fragment>
    )
  }

  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }
}

export default TodoList;