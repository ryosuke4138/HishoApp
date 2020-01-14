import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { TASK_STATUSES } from '../constants/tasks'

const categoryIdToName = (id, categories) => {
  const category = categories.find(c => c.id === id)
  return category ? category.name : null
}

export default function TaskList({
  tasks,
  status,
  categories,
  onStatusChange,
  onStatusCompletedAtChange,
  onDeleteTask,
}) {
  function onStatusChange(e, id) {
    const status = e.target.value
    if(status === 'Completed') {
      const d = new Date()
      const completed_at = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
      onStatusCompletedAtChange(id, status, completed_at)
    } else {
      onStatusChange(id, status)
    }
  }

  return tasks.map((task) => (
    <Card
      key={`ranking-item-${task.id}`}
      style={{ maxWidth: '500px', margin: '16px auto' }}
    >
      <CardContent>
        <Typography type="title">
          {task.title}
        </Typography>
      </CardContent>
      {task.category && 
        <CardActions>
          <Button variant="outlined">
            {categoryIdToName(task.category, categories)}
          </Button>
        </CardActions>
      }
      {task.description &&
        <CardContent>
          <Typography type="description">
            {task.description}
          </Typography>
        </CardContent>
      }
      <CardActions>
        <select 
          value={task.status} 
          onChange={(e) => {
            console.log(e)
            onStatusChange(e, task.id)
          }}>
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </CardActions>
      <CardActions>
        <Button type="danger" onClick={()=>{onDeleteTask(task.id)}}>
          Delete Task
        </Button>
      </CardActions>
    </Card>
  ))
}