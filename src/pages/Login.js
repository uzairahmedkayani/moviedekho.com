import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', email, password);
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default Login;
