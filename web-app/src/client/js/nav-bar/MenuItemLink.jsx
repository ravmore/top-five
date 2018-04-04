import React from 'react';
import { Link } from 'react-router-dom';

const AnchorMenuItem = props =>
  props.dropdown ? (
    <div className="dropdown show col d-flex justify-content-center">
      <a className="dropdown-toggle menu-item" role="button" id="dropdownMenua" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {props.title}
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenua">
        {props.items.map(item => 
          <Link className="dropdown-item" to={item.to}>{item.title}</Link>
        )}
      </div>
    </div>
  ) : (
    <Link className="menu-item" to={props.to} >{props.title}</Link>
  );

export default AnchorMenuItem;