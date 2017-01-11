//theme related material-ui
import { getMuiTheme } from 'material-ui/styles'

import {cyan500} from 'material-ui/styles/colors'

const medrefrTheme = getMuiTheme({
  palette: {
    primary1Color: '#42B3E5',
    textColor: cyan500,
  },
  // appBar: {
  //   height: 50,
  // },
})

export default medrefrTheme