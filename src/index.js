import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import AppRouter from "./routers/AppRouter"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

// const store = createStore(rootReducer, composeWithDevTools())
const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()