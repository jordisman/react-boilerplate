import React from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

function Header() {
  return (
    <div>
      header
      <h1>{moment().format('dddd, MMMM Do YYYY, h:mm a')}</h1>
      <NavBar>
        NavBar
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
