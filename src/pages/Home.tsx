// pages/Home/Home.tsx
import React from 'react';
import LoginForm from '../../components/LoginForm';

const Home: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Handle login logic
    console.log('Login submitted:', username, password);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Home;
