import React from 'react'
import Button from '@material-ui/core/Button'
import MaterialTextField from './form/TextField'
import MaterialTimeField from './form/TimeField'
import { reduxForm, Field } from 'redux-form'

class AddTaskForm extends React.Component {
  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div style={{width: 400, display: 'flex', flexDirection: 'column'}} >
          <Field name='title' label='Title' component={MaterialTextField} required />
          <Field name='description' label='Description' component={MaterialTextField} />
          <Field name='deadline' label='Deadline' component={MaterialTimeField} />
          <Button type='submit' size='medium' variant='contained' color='primary' >Save</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear</Button> 
        </div>
      </form>
    )
  }
}

export const AddTaskReduxForm = reduxForm({
  form: 'AddTaskForm',
})(AddTaskForm)