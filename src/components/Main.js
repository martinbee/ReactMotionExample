require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Motion, spring } from 'react-motion';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          {value => <div>{value.x}</div>}
        </Motion>
        <Motion defaultStyle={{x: 10}} style={{x: spring(0)}}>
          { (style) => {
            return (
              <div
                style={{
                  opacity: `${style.x}`
                }}
              >
                React Motion Opacity
              </div>
            );
          }}
        </Motion>
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          { (style) => {
            return (
              <div
                style={{
                  fontSize: `${style.x*5}px`
                }}
              >
                React Motion Example
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
}

export default AppComponent;
