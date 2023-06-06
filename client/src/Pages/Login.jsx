import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      username,
      password,
      role,
    };

    console.log(payload);

    fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
        alert('login success');
        setTimeout(() => {
          navigate('/dashboard');
          window.location.reload();
        }, 200);
      })
      .catch((err) => console.log(err));
  };

  // ------------ auto login------------------

  const handalAdmin = () => {
    setUsername('sangita kumari');
    setPassword('123456');
    setRole('admin');
  };

  const handalaccount = () => {
    setUsername('Sachin Kumar');
    setPassword('1234');
    setRole('accounts');
  };

  const handalcustomer = () => {
    setUsername('Sonam Kumari');
    setPassword('1234');
    setRole('customer_executive');
  };

  return (
    <Container>
      <VStack spacing={4} align="center">
        <Box>
          <h1>Login here</h1>
        </Box>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Role</FormLabel>
          <Select
            placeholder="select role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="accounts">Accounts</option>
            <option value="customer_executive">Customer Executive</option>
          </Select>
        </FormControl>
        <Button onClick={handleSubmit}>Login</Button>

        <Flex gap="20px">
          <Button onClick={handalAdmin}>Admin</Button>
          <Button onClick={handalaccount}>Accounts</Button>
          <Button onClick={handalcustomer}>Customer_executive</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Login;
