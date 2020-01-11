import React from 'react';
import { List, Card, Button } from 'antd';
import { TASK_STATUSES } from '../constants/tasks';

const categoryIdToName = (id, categories) => {
  const category = categories.find(c => c.id === id)
  return category ? category.name : null
}

const TaskList = props => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={props.tasks}
      renderItem={item => (
      <List.Item>
        <Card title={item.title}>
          <p>{item.description}</p>
          {item.deadline && <p>deadline: {item.deadline.slice(0,-3)}</p>}
          {item.category && <p>category: {categoryIdToName(item.category, props.categories)}</p>}
        </Card>
        <select 
          value={item.status} 
          onChange={(e) => {
            onStatusChange(e, item.id)
          }}>
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <Button type="danger" onClick={()=>{props.onDeleteTask(item.id)}}>
          Delete Task
        </Button>
      </List.Item>
      )}
    />
  )
  function onStatusChange(e, id) {
    const status = e.target.value
    if(status === 'Completed') {
      const d = new Date()
      const completed_at = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
      props.onStatusCompletedAtChange(id, status, completed_at)
    } else {
      props.onStatusChange(id, status)
    }
  }
}

export default TaskList