import React, { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { addUser, loadUser } from '../Redux/action';

const initialState = {
  username: '',
  role: '',
};

const AddUsers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, role } = state;
  const toast = useToast();

  const handalAdd = () => {
    if (!username || !role) {
      toast({
        title: 'All the Input filled is required',
        status: 'error',
        duration: 5000,
        position: 'top',
        isClosable: true,
      });
    } else {
      dispatch(addUser(state));

      console.log(state);
    }
  };

  const handalChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Button onClick={onOpen}>Add user details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add users</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Container>
              <FormControl>
                <FormLabel> username</FormLabel>
                <Input
                  placeholder=" username"
                  name="username"
                  value={username || ''}
                  onChange={handalChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Role</FormLabel>
                {/* <Input
                  name="role"
                  placeholder="role"
                  value={role || ''}
                  onChange={handalChange}
                /> */}

                <Select value={role} name="role" onChange={handalChange}>
                  <option value="admin">Admin</option>
                  <option value="accounts">Accounts</option>
                  <option value="customer_executive">Customer_executive</option>
                </Select>
              </FormControl>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={'blue'} mr={3} onClick={handalAdd}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddUsers;
