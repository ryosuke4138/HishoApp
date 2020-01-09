import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';
import * as moment from 'moment';

const renderCalendarField = ({
  input,
  label,
  meta: {touched, error},
  children,
  ...custom
}) => {
  return(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        value = {input.value !== ''? new Date(input.value) : null}
        onChange={(event, value) => input.onChange(value)}
        children={children}
        {...custom}
        formatDate={(date) => moment(date).format('YYYY-MM-DD')}
      />
    </MuiPickersUtilsProvider>
  )
}

export default renderCalendarField