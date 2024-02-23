import React from 'react';
import "./SidebarOption.css";

function sidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h1>
            {text}
        </h1>
    </div>
  );
}

export default sidebarOption;
