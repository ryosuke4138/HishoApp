import React from 'react';
import { List, Card, Button } from 'antd';
import { TASK_STATUSES } from '../constants/tasks';


const TaskList = props => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={props.tasks}
      renderItem={item => (
      <List.Item>
        <Card title={item.title}>
          <p>{item.description}</p>
          <p>deadline: {item.deadline}</p>
          <p>category: {item.category}</p>
        </Card>
        <select value={item.status} onChange={(e) => {onStatusChange(e, item.id)}}>
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
    props.onStatusChange(id, e.target.value);
  }
};

export default TaskList