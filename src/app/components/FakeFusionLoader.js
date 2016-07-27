import React, {Component} from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

class FakeFusionLoader extends Component {
  constructor(props) {
    super(props);

    this.setLoader = this.setLoader.bind(this);
  }

  setLoader() {
    if (this.props.status == 'loading') {
      return (
        <RefreshIndicator
        size={50}
        left={70}
        top={0}
        loadingColor={"#FF9800"}
        status='loading'
        style={style.refresh}
      />);
    }
    return this.props.content
  }

  render() {
    return (
      <div style={style.container}>
        {this.setLoader()}
      </div>
    );

  }
}

FakeFusionLoader.propTypes = {
  status: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
};

export default FakeFusionLoader;