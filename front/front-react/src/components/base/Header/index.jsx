import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Button, Spacer, Text } from '../../../components';

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper" type='horizontal'>
      <div class = "MainLogo"></div>
      <Text size={48} strong={true}>찾는 정책이 있나요?</Text>
      <div>
        {user ? (
          <>
            <span className="welcome">
              환영합니다, <b>{user.name}님</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

export default Header;