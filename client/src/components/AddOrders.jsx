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
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { addOrder, addUser, loadUser } from '../Redux/action';

const initialState = {
  order: '',
};

const AddOrders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { order } = state;
  const toast = useToast();

  const handalAdd = () => {
    if (!order) {
      toast({
        title: ' Input filled is required',
        status: 'error',
        duration: 5000,
        position: 'top',
        isClosable: true,
      });
    } else {
      dispatch(addOrder(state));

      console.log(state);
    }
  };

  const handalChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Button onClick={onOpen}>Add Orders details</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Container>
              <FormControl>
                <FormLabel> Add Orders</FormLabel>
                <Input
                  placeholder=" order"
                  name="order"
                  value={order || ''}
                  onChange={handalChange}
                />
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

export default AddOrders;
