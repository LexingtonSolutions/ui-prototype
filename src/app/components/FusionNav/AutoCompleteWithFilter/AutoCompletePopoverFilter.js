import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class AutoCompletePopoverFilter extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handlePopoverTouch = this.handlePopoverTouch.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.state = {
      dataSource: [],
      searchContext: 'OP',
      open: false,
    };

    this.style = {
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
    };

    const selectWidth = {
      customWidth: {
        width: 150,
      },
    };

    this.inLine = {
      display: "inline-block",
      height: '100%',
    }
  };

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
      searchContext: this.state.searchContext,
      open: this.state.open,
    });
  };

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handlePopoverTouch(event, menuItem) {
    this.setState({
      dataSource: [],
      searchContext: menuItem.props.primaryText,
      open: false,
    })
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };


  render() {
    return (
      <div>
        <div style={this.inLine}>
          <AutoComplete
            hintText={'Search by: ' + this.state.searchContext}
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
          />
        </div>

        <div style={this.inLine}>
          <RaisedButton
            onTouchTap={this.handleTouchTap}
            label='Change Filter'
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu onItemTouchTap={this.handlePopoverTouch}>
              <MenuItem primaryText="OP" />
              <MenuItem primaryText="Property" />
              <MenuItem primaryText="Management Company" />
            </Menu>
          </Popover>
        </div>
      </div>
    );
  }
}

// MyPopFilterSearch.propTypes = {
//
// };

export default AutoCompletePopoverFilter;