import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import { theme } from "../materialUI/theme"
import { HomePage } from "../pages/HomePage"

export const VisitsApp = () => {
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    // dispatch({ type: "SET_PARAMS", params })
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <HomePage />
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default VisitsApp
