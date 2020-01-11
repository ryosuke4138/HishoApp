import React from 'react'
import Button from '@material-ui/core/Button'
import MaterialTextField from './form/TextField'
// import MaterialTimeField from './form/TimeField'
// import renderCalenderField from './form/Home'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import renderRadio from './form/Radio'
import { reduxForm, Field } from 'redux-form'

class AddTaskForm extends React.Component {
  required = value => value ? undefined : 'Required'
  maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
  maxLength200 = this.maxLength(200)

  submit = (values) => {
    const time = values.deadlineTime || '00:00'
    const params = {
      title: values.title,
      description: values.description,
      deadline: values.deadlineDate ? values.deadlineDate + 'T' + time + ':00' : new Date(),
      category: values.category
    }
    this.props.onCreateTask(params)
  }

  render() {
    const { handleSubmit, pristine, submitting, reset } = this.props
    console.log('this.props.categories')
    console.log(this.props.categories)

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div style={{width: 400, display: 'flex', flexDirection: 'column'}} >
          <Field name='title' label='Title' component={MaterialTextField} validate={[ this.required, this.axLength200 ]} required />
          <Field name='description' label='Description' component={MaterialTextField} />
          <Field name="deadlineDate" component="input" type="date" />
          <Field name="deadlineTime" component="input" type="time" />
          {/* <Field name="deadline" component={MaterialTimeField} /> */}
          {/* <Field name="deadline" component={renderCalendarField} label="DEPARTURE" minDate={startDate} /> */}
          <Field name='category' label='Category' component={renderRadio} required >
            <FormControlLabel value='waseda' control={<Radio />} label='Waseda' />
            <FormControlLabel value='pluszero' control={<Radio />} label='Pluszero' />
            <FormControlLabel value='other' control={<Radio />} label='Others' />
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
