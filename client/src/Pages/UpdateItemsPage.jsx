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
import { getSingleitems, loadItems, updateItems } from '../Redux/action';

const UpdateItemsPage = () => {
  const [state, setState] = useState({
    Item: '',
  });

  let { id } = useParams();

  console.log(id);
  const { singleItems } = useSelector((state) => state);

  console.log('singledata', singleItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Item } = state;

  useEffect(() => {
    dispatch(getSingleitems(id));
  }, []);

  useEffect(() => {
    if (singleItems) {
      setState({ ...singleItems });
    }
  }, [singleItems]);

  const handalChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handalSubmmit = () => {
    dispatch(updateItems(state, id));

    navigate('/dashboard');

    setTimeout(() => {
      dispatch(loadItems());
    }, 1000);
  };

  return (
    <>
      <Container mt="6rem">
        <FormControl>
          <FormLabel> Items</FormLabel>
          <Input
            placeholder=" Item"
            name="Item"
            value={Item}
            onChange={handalChange}
          />
        </FormControl>

        <Button mt="30px" w="100%" onClick={handalSubmmit}>
          Update Items
        </Button>

      </Container>
    </>
  );
};

export default UpdateItemsPage;
