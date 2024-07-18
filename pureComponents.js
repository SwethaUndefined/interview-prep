// Pure components are type of component and that implements shouldComponentUpdate and it rerender only if the state
//or props are changed. Mainly it will do shallow comparision of state and props


import React, { PureComponent } from 'react';

class MyPureComponent extends PureComponent {
  render() {
    return (
      <div>
        <p>This is a pure component.</p>
        <p>Props: {this.props.someProp}</p>
      </div>
    );
  }
}


// when the someProp is changed then only this component will rerender