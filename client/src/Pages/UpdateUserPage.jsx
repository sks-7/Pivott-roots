import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { getSingleUsers, loadUser, updateUser } from '../Redux/action';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUserPage = () => {
  const [state, setState] = useState({
    username: '',
    role: '',
  });

  let { id } = useParams();

  console.log(id);
  const { singleUsers } = useSelector((state) => state);

  console.log('singledata', singleUsers);
  const navigate = useNavigate();
  const toast = useToast();

  const dispatch = useDispatch();

  const { username, role } = state;

  // console.log(username, role);

  useEffect(() => {
    dispatch(getSingleUsers(id));
  }, []);

  useEffect(() => {
    if (singleUsers) {
      setState({ ...singleUsers });
    }
  }, [singleUsers]);

  const handalChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handalSubmmit = () => {
    dispatch(updateUser(state, id));

    navigate('/dashboard');

    setTimeout(() => {
      dispatch(loadUser());
    }, 1000);
  };

  return (
    <>
      <Container mt="6rem">
        <FormControl>
          <FormLabel> Username</FormLabel>
          <Input
            placeholder=" username"
            name="username"
            value={username}
            onChange={handalChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Role</FormLabel>
          <Input
            name="role"
            placeholder="role"
            value={role}
            onChange={handalChange}
          />
        </FormControl>

        <Button mt="30px" w="100%" onClick={handalSubmmit}>
          Update users
        </Button>
      </Container>
    </>
  );
};

export default UpdateUserPage;
