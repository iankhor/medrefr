import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class ModalDialog extends React.Component {
  static propTypes={
    onOpen: PropTypes.func
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
    this.props.onOpen();
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label={this.props.label} onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={true}
          open={this.state.open}
          autoDetectWindowHeight={false}
          autoScrollBodyContent={true}
        >
          {this.props.children}

        </Dialog>
      </div>
    );
  }
}
