import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ active, Icon, text }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2 className="sidebarOption__text">{text}</h2>
    </div>
  );
}

export default SidebarOption;
