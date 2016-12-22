import React from 'react'

export default (props) => (
  <div style={{
    background: 'red',
    color: 'white',
    width: 60,
    height: 60,
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: 10
  }}>{props.text}</div>
)