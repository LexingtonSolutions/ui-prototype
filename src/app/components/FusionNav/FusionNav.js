import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoCompletePopoverFilter from './AutoCompleteWithFilter/AutoCompletePopoverFilter'
import DrawerList from './DrawerList/DrawerList';

class FusionNav extends Component {

  constructor(props) {
    super(props);

    this.headerBarStyle = {
      background: '#4285f4',
      width: '100%',
      color: '#fff',
    }

    this.titleStyle = {
      color: '#fff',
    }
  }


  render() {
    return (
      <Toolbar style={this.headerBarStyle}>
        <ToolbarGroup firstChild={true}>
          <DrawerList
            tabs={this.props.tabs}
            onTabChange={this.props.onTabChange}
            fusionPages={this.props.fusionPages}
            systemPages={this.props.systemPages}
            title="Fusion"
          />
        </ToolbarGroup>

        <ToolbarGroup >
          <ToolbarTitle text={this.props.currentOp} style={this.titleStyle}/>

        </ToolbarGroup>

        <ToolbarGroup lastChild={true}>
          <AutoCompletePopoverFilter/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

FusionNav.propTypes = {
  onTabChange: React.PropTypes.func.isRequired,
  tabs: React.PropTypes.array.isRequired,
  fusionPages: React.PropTypes.array.isRequired,
  systemPages: React.PropTypes.array.isRequired,
  currentOp: React.PropTypes.string.isRequired,
};

export default FusionNav;