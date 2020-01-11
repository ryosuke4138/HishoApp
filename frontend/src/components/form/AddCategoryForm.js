import React from 'react'
import Button from '@material-ui/core/Button'
import MaterialTextField from './TextField'
import { reduxForm, Field } from 'redux-form'

class AddCategoryForm extends React.Component {
  submit = (values) => {
    const params = {
      name: values.name,
    }
    if(!this.props.categories.some(c => c.name === values.name)) {
      this.props.onCreateCategory(params)
    }
    this.props.endForm()
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div style={{width: 400, display: 'flex', flexDirection: 'column'}} >
          <Field name='name' label='Name' component={MaterialTextField} required />
          <Button type='submit' size='medium' variant='contained' color='primary' >Save</Button>
        </div>
      </form>
    )
  }
}

export const AddCategoryReduxForm = reduxForm({
  form: 'AddCategoryForm',
})(AddCategoryForm)
