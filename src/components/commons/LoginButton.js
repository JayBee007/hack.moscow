import React from 'react';

const LoginButton = (props) => {
  const { showTelegram } = props;

  if(showTelegram) {
    return (
      <button className="btn btn-login"><span className="icon-Chip btn-login__icon"></span>Login with Telegram</button>
    )
  }
  return (
    <button className="btn btn-login">Login</button>
  )
}

export default LoginButton
