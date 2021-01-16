import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './main.css';

const Header = (props) => {
   return (
    <header className="header">
      <div className="title">
        <p>{props.name}</p>
      </div>
      <ul className="links">
        {props.links.map(link => (
          <li key={link.name}>
            <Link to={link.link} className="link">{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
   );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;