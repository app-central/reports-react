import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "15px",
    
      }
    }
  }
});
export default function ArrowTooltips(props) {
  return (
    <MuiThemeProvider theme={theme}>

    <Tooltip title={props.name} placement="right" arrow>
      <span>{props.newName}</span>
    </Tooltip>
    </MuiThemeProvider>
  );
}