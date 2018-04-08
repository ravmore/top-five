import React from 'react';
import $ from 'jquery';
import MenuItemLink from './MenuItemLink';
import MenuItemAnchor from './MenuItemAnchor';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.setSpacerHeight();
  }

  toggleMenu(e) {
    e.preventDefault();
    const height = $('.toggleable').height();
    if (height) {
      $('.toggleable').each( function (i) {
        $(this).animate({
          height: '0px',
        });
      });
      $('.menu-item').css('visibility', 'hidden');
      this.setSpacerHeight(-56, true);
    } else {
      $('.toggleable').each( function (i) {
        $(this).animate({
          height: '56px',
        });
      });
      $('.menu-item').css('visibility', 'visible');
      this.setSpacerHeight(56, true);
    }
  };

  setSpacerHeight(adjust = 0, animate = false) {
    const height = $('#nav').outerHeight() + adjust;
    if(animate)
      $('#nav-spacer').animate({
        height
      })
    else
      $('#nav-spacer').height(height);
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className="header" id="nav">
          <div className="row">
            <button 
              className="menu-btn"
              style={{
                backgroundImage: `url(${this.props.menuBtnImg})`
              }}
              type="button"
              onClick={this.toggleMenu}
            >{this.props.menuBtnText}</button>
            <div className="col-8 d-flex justify-content-center">
              <a className="logo" href={this.props.titleTo || '/'}>{this.props.title}</a>
            </div>
          </div>
          <div className="toggleable">
            <div className="toggleable menu">
              <div className="toggleable row">
              {
                this.props.menuItems.map(item =>
                  item.tag === 'anchor' ?
                    <MenuItemAnchor key={item.title} {...item} />
                  :
                    <MenuItemLink key={item.title} {...item} />
                )
              }
              </div>
            </div>
          </div>
        </div>

        <div 
          className="container" id="nav-spacer"
          style={{ height: `${this.props.spacer || '0'}px`}}
        ></div>

      </div>
    );
  }
};

export default NavBar;