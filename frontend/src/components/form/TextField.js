import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const MaterialTextField = ({
  input,
  label,
  meta: { touched, error },
  type='text',
  required = false,
}) => {
  const classes = useStyles()

  return (
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
  )
}

export default MaterialTextField