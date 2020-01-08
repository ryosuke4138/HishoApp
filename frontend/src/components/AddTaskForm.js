import React from 'react';
import Button from '@material-ui/core/Button'
import MaterialTextField from './form/TextField'
// import { Form, Input, Icon, Button } from 'antd';

export class AddTaskForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onCreateTask(values)
      }
    })
  }

  render() {
    // const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    // const titleError = isFieldTouched('title') && getFieldError('title');
    // const descriptionError = isFieldTouched('description') && getFieldError('description');
    // const buttonDisable = getFieldError('title') // || getFieldError('description')

    return (
      <div>
        {/* <TextField labelName='title' required="true"/> */}
        <MaterialTextField labelName='Title' required="True"/>
        <MaterialTextField labelName='description'/>
      </div>
      // <Form layout="inline" onSubmit={this.handleSubmit}>
      //   <Form.Item validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
      //     {getFieldDecorator('title', {
      //       rules: [{ required: true, message: 'title is required' }],
      //     })(
      //       <Input
      //         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      //         placeholder="title"
      //       />,
      //     )}
      //   </Form.Item>
      //   <Form.Item>
      //     <Input
      //       prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
      //       placeholder="description"
      //     />
      //   </Form.Item>
      //   <Form.Item>
      //     <Button type="primary" htmlType="submit" disabled={buttonDisable}>
      //       Add Task
      //     </Button>
      //   </Form.Item>
      // </Form>
      
    )
  }
}

// export const WrappedAddTaskForm = Form.create({ name: 'add_task_form' })(AddTaskForm);