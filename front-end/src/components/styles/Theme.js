//theme related material-ui
import { getMuiTheme } from 'material-ui/styles'

const medrefrTheme = getMuiTheme({
  palette: {
    primary1Color: '#42B3E5',
    primary2Color: '#3156A3',
    textColor: '#3156A3',
    accent1Color: '#3156A3'
  },

  // fontFamily: 'monospace',

  appBar: {
    color: '#3156A3',
  },
})

export default medrefrTheme