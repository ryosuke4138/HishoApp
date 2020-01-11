import React from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import MaterialTextField from './TextField'
import AlertDialog from './Alert'
// import MaterialTimeField from './TimeField'
// import renderCalenderField from './Home'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import renderRadio from './Radio'
import { reduxForm, Field } from 'redux-form'

class AddTaskForm extends React.Component {
  categoryNameToId = (name) => {
    const category = this.props.categories.find(c => c.name === name)
    return category ? category.id : null
  }

  submit = (values) => {
    const time = values.deadlineTime ? values.deadlineTime : '00:00'
    const params = {
      title: values.title,
      description: values.description,
      deadline: values.deadlineDate ? values.deadlineDate + 'T' + time + ':00' : null,
      category_id: this.categoryNameToId(values.category)
    }
    this.props.onCreateTask(params)
  }

  render() {
    const { handleSubmit, pristine, submitting, reset, tasks, categories, onDeleteTask, onDeleteCategory } = this.props
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div style={{width: 400, display: 'flex', flexDirection: 'column'}} >
          <Field name='title' label='Title' component={MaterialTextField} required /> 
          <Field name='description' label='Description' component={MaterialTextField} />
          <Field name="deadlineDate" component="input" type="date" />
          <Field name="deadlineTime" component="input" type="time" />
          {/* <Field name="deadline" component={MaterialTimeField} /> */}
          {/* <Field name="deadline" component={renderCalendarField} label="DEPARTURE" minDate={startDate} /> */}
          <Field name='category' label='Category' component={renderRadio} required >
            {categories.map(category => (
              <div>
                <FormControlLabel value={category.name} control={<Radio />} label={category.name} />
                <AlertDialog onDeleteCategory={() => {
                  const categoryTasks = tasks.filter(task => task.category === category.id)
                  categoryTasks.map(task => (
                    onDeleteTask(task.id)
                  ))
                  onDeleteCategory(category.id) 
                }} />
              </div>
            ))}
          </Field>
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
