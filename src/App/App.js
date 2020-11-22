import React from 'react'
import SideMenu from "../components/SideMenu"
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core'
import Header from "../components/Header"
import PageHeader from '../components/PageHeader'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import Employees from "../pages/Employees/Employees"

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />    
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '50px',
    width: '100%'
  }
})


export default App

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})