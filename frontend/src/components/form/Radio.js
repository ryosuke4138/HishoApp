import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'

const renderRadio = ({
  input: { value, onChange },
  label,
  children,
  meta: { touched, error },
  onFieldChange,
  row = true,
  required = false,
  rootClass = '',
}) => {
  return (
    <FormControl classes={{root: rootClass}} required={required} component='fieldset' error={!!(touched && error)}>
      <FormLabel component='legend'>{label}</FormLabel>
      <RadioGroup
        row={row}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
          onFieldChange && onFieldChange(e.target.value)
        }}
      >
        {children}
      </RadioGroup>
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}

export default renderRadio