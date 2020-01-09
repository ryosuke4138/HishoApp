import React from 'react'
import Button from '@material-ui/core/Button'
import MaterialTextField from './form/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Switch from '@material-ui/core/Switch'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { withStyles } from '@material-ui/core'

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props)
    // this.props.initialize({text: 'てきすと'})
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields()
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //       this.props.onCreateTask(values)
  //     }
  //   })
  // }
  submit = (values) => {
    const params = new FormData()
    params.append('title', values.text)
    params.append('description', values.text)
    // params.append('textarea', values.textarea)
    // params.append('select', values.select)
    // params.append('radio', values.radio)
    // params.append('checkbox', values.checkbox)
    // params.append('switch', !!values.switch)
    // params.append('image', values.image)
    // params.append('members', JSON.stringify(values.members))
    // this.props.create(params)
  }

  render() {
    // const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    // const titleError = isFieldTouched('title') && getFieldError('title');
    // const descriptionError = isFieldTouched('description') && getFieldError('description');
    // const buttonDisable = getFieldError('title') // || getFieldError('description')
    const { handleSubmit, pristine, submitting, reset } = this.props

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div style={{width: 400, display: 'flex', flexDirection: 'column'}} >
          <Field name='title' label='Title' component={MaterialTextField} required />
          <Field name='description' label='Description' component={MaterialTextField} />
          <Button type='submit' size='medium' variant='contained' color='primary' >Save</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear</Button> 
          {/* clear draft form data */}
        </div>
      </form>
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

export const AddTaskReduxForm = reduxForm({
  form: 'AddTaskForm',
})(AddTaskForm)