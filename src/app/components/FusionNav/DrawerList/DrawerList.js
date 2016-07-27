import React, {Component} from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import SelectableList from './SelectableList';

class DrawerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };

    this.drawerStyle = {
      top: '56px',
    };

    this.tabToListItem = this.tabToListItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  tabToListItem(tab, index) {
    // This should also create a func to call, something that would trigger
    // a redux reload

    // Also should make this into a class so we know what fields exist

    if (tab.subPages) {
      //return an item with nested items
      const subItems = tab.subPages.map(this.tabToListItem);

      return (
        <ListItem
          key={tab.name}
          primaryText={tab.name}
          leftIcon={<ActionAssessment/>}
          nestedItems={subItems}
          autoGenerateNestedIndicator={true}
          primaryTogglesNestedList={true}
          value={tab.name}
        />
      )
    } else {
      //regular item
      return (
        <ListItem
          key={tab.name}
          primaryText={tab.name}
          leftIcon={<ActionAssessment/>}
          value={tab.name}
        />
      );
    }
  }

  render() {
    return (
    <div>
      <div style={this.inLine}>
        <IconButton onTouchTap={this.handleToggle}>
          <Menu color="#fff"/>
        </IconButton>
      </div>
      <h2 style={this.inLine}>{this.props.title}</h2>
      <Drawer
        open={this.state.open}
        containerStyle={this.drawerStyle}
        zDepth={1}
      >
        
        <SelectableList
          style={this.drawerStyle}
          defaultValue={3}
          onSelectFxn={this.props.onTabChange}
        >
          {this.props.tabs.map(this.tabToListItem)}
          <Divider />
          {this.props.fusionPages.map((item, index) => {
            return (<ListItem key={item} value={item} primaryText={item}/>)
          })}
          <Divider />
          {this.props.systemPages.map((item, index) => {
            return (<ListItem key={item} value={item} primaryText={item}/>)
          })}
        </SelectableList>
      </Drawer>
    </div>
    );
  }

}

DrawerList.propTypes = {
  tabs: React.PropTypes.array.isRequired,
  fusionPages: React.PropTypes.array.isRequired,
  systemPages: React.PropTypes.array.isRequired,
  title: React.PropTypes.string,
  onTabChange: React.PropTypes.func,
};

export default DrawerList;