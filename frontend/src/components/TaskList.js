import React from 'react';
import { 
  Card, CardContent, CardActions, Typography, 
  Button, Select, InputLabel, FormControl, MenuItem,
} from '@material-ui/core'
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
  function onStatusChange_(next_status, id) {
    if(next_status === 'Completed') {
      const d = new Date()
      console.log(new Date())
      console.log(new Date())
      // const completed_at = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() // SIO
      const completed_at = '2020-1-14T11:33:23'
      // const completed_at = '01/14/2020 11:33:23'
      console.log('onStatusChange_')
      console.log(onStatusCompletedAtChange)
      console.log(id, next_status, completed_at)
      onStatusCompletedAtChange(id, next_status, completed_at)
    } else {
      console.log('NOT completed')
      onStatusChange(id, next_status)
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
        <FormControl >
          <InputLabel id="status-select-label">Status</InputLabel>
          <Select
            labelId="status-select-label"
            id="demo-simple-select"
            value={task.status}
            onChange={(e) => {
              const next_status = e.target.value
              onStatusChange_(next_status, task.id)
            }}
          >
            {TASK_STATUSES.map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardActions>
      <CardActions>
        <Button type="button" onClick={()=>{onDeleteTask(task.id)}}>
          Delete Task
        </Button>
      </CardActions>
    </Card>
  ))
}