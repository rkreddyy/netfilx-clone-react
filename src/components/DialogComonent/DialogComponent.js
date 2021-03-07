import React from 'react';
import './DialogComponent.css';

export function DialogComponent(props) {
  return (
    <div className="dialog-parent">
      <div className="dialog-content">
        <div className="close-icon" onClick={props.toggle}>
          &#10006;
        </div>
        <div className="dialog-children">{props.children}</div>
      </div>
    </div>
  );
}
