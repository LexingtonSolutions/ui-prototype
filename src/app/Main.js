/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FusionNav from './components/FusionNav/FusionNav';
import { Tabs, SystemPages, FusionPages} from './constants';
import FakeFusionLoader from './components/FakeFusionLoader';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      content: 'Content will go here',
      status: 'loading',
    };

    this.contentStyle = {
      width: '80%',
      textAlign: "center",
      margin: '0 auto',
      borderStyle: 'solid',
      borderWidth: '5px',
      paddingTop: '20px',
      height: '500px',
    };

    this.changeContent = this.changeContent.bind(this);
    this.load = this.load.bind(this);
  }

  load() {
    this.setState({
      content: this.state.content,
      status: 'hide',
    });
  }

  changeContent(sometext) {
    const text = sometext;
    this.setState({
      content: text,
      status: 'loading'
    });
    setTimeout(this.load, 3000);
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>

          <FusionNav
            onTabChange={this.changeContent}
            tabs={Tabs}
            fusionPages={FusionPages}
            systemPages={SystemPages}
            currentOp="Rosegate Associates, L.L.C. (022511)"
          />

          <div className="content" style={this.contentStyle}>
            <FakeFusionLoader content={this.state.content} status={this.state.status}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

