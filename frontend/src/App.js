import React from 'react'
import { Route, Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './components/Header'
import Task from './components/Task'
import TodoApp from './containers/TodoApp'

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      {/* category names and IDs are hard coded */}
      <ul>
        <li><Link to="/all">All Categories</Link></li>
        <li><Link to="/category/2502">personal computer</Link></li>
        <li><Link to="/category/10002">book</Link></li>
      </ul>

      {/* Route of Task */}
      <Route path="/all" component={Task} />
      <Route path="/category/:id"
        render={
          ({match}) => <Task categoryId={match.params.id} />
        }
      />
      <TodoApp />
    </div>
  )
}
