import React from 'react';

const MenuItemAnchor = props =>
  !!props.dropdown ? (
    <div className="dropdown show col d-flex justify-content-center">
      <a className="dropdown-toggle menu-item" id="dropdownMenu">
        {props.title}
      </a>

      <div className="dropdown-menu">
        {
          props.items.map(item => 
            <a className="dropdown-item" href={item.to}>{item.title}</a>
          )
        }
      </div>
    </div>
  ) : (
    <a className="menu-item" href={props.to}>{props.title}</a>
  );

export default MenuItemAnchor;