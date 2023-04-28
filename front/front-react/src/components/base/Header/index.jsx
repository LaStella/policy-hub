import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Button, Modal, Spacer } from '../../../components';

const Header = ({ user, onLogout }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <div className="wrapper" type='horizontal'>
        <div class = "MainLogo"></div>
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
              <Spacer type="horizontal">
                <span className="LoginPlease">
                  맞춤 정보를 위해 로그인 하세요.
                </span>
                <Button size="small" onClick={() => setVisible(true)} label="Log in" />
                <Modal.LoginModal visible={visible} onClose={() => setVisible(false)} onClick={() => setVisible(false)} />
              </Spacer>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

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