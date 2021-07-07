import React from 'react';

class Button extends React.Component {
  render() {
    const { text, onClick, className } = this.props;
    return (
      <button className={className} onClick={onClick}>{text} </button>
    )
  }
}

export default Button;