import React, { useState } from "react"
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

function MaterialTimeField() {
  const [selectedDate, handleDateChange] = useState(new Date())

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker
        ampm={false}
        autoOk
        value={selectedDate}
        disablePast
        onChange={handleDateChange}
        label="Deadline"
        showTodayButton
      />
    </MuiPickersUtilsProvider>
  )
}

export default MaterialTimeField