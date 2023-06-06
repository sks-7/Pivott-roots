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

import { useNavigate, useParams } from 'react-router-dom';
import { getSingleorders, loadOrder, updateOrder } from '../Redux/action';

const UpdateOrderPage = () => {
  const [state, setState] = useState({
    order: '',
  });

  let { id } = useParams();

  console.log(id);
  const { singleOrders } = useSelector((state) => state);

  console.log('singledata', singleOrders);
  const navigate = useNavigate();
  const toast = useToast();

  const dispatch = useDispatch();

  const { order } = state;

  // console.log(username, role);

  useEffect(() => {
    dispatch(getSingleorders(id));
  }, []);

  useEffect(() => {
    if (singleOrders) {
      setState({ ...singleOrders });
    }
  }, [singleOrders]);

  const handalChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handalSubmmit = () => {
    dispatch(updateOrder(state, id));

    navigate('/dashboard');

    setTimeout(() => {
      dispatch(loadOrder());
    }, 1000);
  };

  return (
    <>
      <Container mt="6rem">
        <FormControl>
          <FormLabel> Orders</FormLabel>
          <Input
            placeholder=" order"
            name="order"
            value={order}
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

export default UpdateOrderPage;
