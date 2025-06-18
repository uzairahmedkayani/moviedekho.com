import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Register:', form);
  };

  return (
    <form onSubmit={handleRegister} style={styles.form}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
      <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
      <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required />
      <button type="submit">Register</button>
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

export default Register;
