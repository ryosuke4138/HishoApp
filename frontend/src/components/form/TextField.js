import React from 'react'
import TextField from '@material-ui/core/TextField'

const MaterialTextField = ({
  input,
  label,
  meta: { touched, error },
  type='text',
  required = false,
}) => {
  return (
    <div>
    <TextField 
      id={label} 
      required={required}
      error={!!(touched && error)}
      label={label} 
      type={type}
      variant="outlined" 
      helperText={!!(touched && error)}
      {...input}
    />
    {touched &&
      (error && <span>{error}</span>)}
    </div>
  )
}

export default MaterialTextField