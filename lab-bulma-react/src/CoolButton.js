import React from 'react';

class CoolButton extends React.Component {
  render () {
    return(
        <button className={this.props.className} type={this.props.type}>{this.props.children}</button>
    )}
  }

  export default CoolButton;

/*
Como hacer cuando los props estas en el jsx 
<CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>

import React from 'react';

const createClassString = (props) => {
  let result = '';
  if (props.className) result += `${props.className} `; 
  if (props.isDanger) result += 'is-danger ';
  if (props.isPrimary) result += 'is-primary ';
  if (props.isSuccess) result += 'is-success ';
  return result;
}



function CoolButton (props) {
  return (
  <button className={`button ${createClassString(props)}`}>{props.children}</button>
  );
}

export default CoolButton; */