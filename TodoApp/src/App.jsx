import React from 'react'
import './App.css'
import todosData from './TodosData'
import TodoItem from './TodoItem'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prev=>{
      const updatedList = prev.todos.map((item)=>{
        if(item.id === id){
          item.completed = !item.completed
        }
        return item
      })
      return{
        todos: updatedList
      }
    })
  }

  render(){
    const todoItems = this.state.todos.map(item=><TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return(
      <div className='todo-list'>{todoItems}</div>
    )
  }
}

export default App
