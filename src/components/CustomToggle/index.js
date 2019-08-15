import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'

export class CustomToggle extends Component {
    /**
     * handleClick()
     */
    handleClick = (e) => {
      e.preventDefault();
      this.props.onClick(e);
    }
    /**
     * Render
     */
    render() {
      return (
        <Nav onClick={this.handleClick}>
          <Nav.Link className="Link">
          {this.props.children}
          </Nav.Link>
        </Nav>
      );
    }
  }

