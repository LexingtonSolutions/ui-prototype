import React, {Component, PropTypes} from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';

let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    constructor(props) {
      super(props);
      this.handleRequestChange = this.handleRequestChange.bind(this);
    }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange(event, index) {
      console.log(index);
      this.setState({
        selectedIndex: index,
      });
      if (this.props.onSelectFxn) {
        this.props.onSelectFxn(index);
      }
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

SelectableList.propTypes = {
  children: React.PropTypes.node.isRequired,
  defaultValue: React.PropTypes.number.isRequired,
  onSelectFxn: React.PropTypes.func,
};

export default SelectableList;