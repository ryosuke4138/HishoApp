import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import App from './App'
import createStore from './createStore'
import 'antd/dist/antd.css';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

const history = createBrowserHistory() 
const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
        <App />
      {/* </MuiPickersUtilsProvider> */}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
