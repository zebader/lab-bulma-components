import React from 'react';

class CoolButton extends React.Component {
  render () {
    return(
        <button className={this.props.className} type={this.props.type}>{this.props.children}</button>
    )}
  }

  export default CoolButton;