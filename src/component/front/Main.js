import React from 'react';

var Main = React.createClass({
  render: function() {
    return (
      <div style={{
          width: window.innerWidth,
          height: window.innerHeight,
          marginTop: 0,
          background: `url(./static/img/example/Slider_Pequeno.jpg)`,
          backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        }}>
        <div style={{
            position: 'absolute',
            bottom: 0,
            left: 50,
            color: '#FFFFFF',
            fontSize: '1.8em',
            fontWeight: 400
          }}>
          <div style={{
              letterSpacing: 1
            }}>
            <p style={{
                marginTop: 26,
                marginBottom: 20,
                fontSize: '2em',
                fontWeight: 900
              }}>Hello react && antd, :)</p>
            <p style={{
                marginBottom: 20,
                fontSize: '2.2em'
              }}></p>
            <p style={{
                marginBottom: 20
              }}></p>
            <p style={{
                marginBottom: 6
              }}></p>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Main;
