import React, { useState } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  useToast,
} from '@chakra-ui/react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { deleteOrder, loadOrder } from '../Redux/action';

const Ordertable = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state);

  const toast = useToast();

  useEffect(() => {
    dispatch(loadOrder());
  }, []);

  const handalDelete = (id) => {
    if (window.confirm('Do you want to delete the user ?')) {
      dispatch(deleteOrder(id));
      dispatch(loadOrder());
    }
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="#e8f5fd">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Orders name</Th>

              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders &&
              orders.map((ele, ind) => (
                <Tr key={ele._id}>
                  <Td>{ind}</Td>
                  <Td>{ele.order}</Td>
                  <Td>
                    <Popover>
                      <PopoverTrigger>
                        <Button>
                          <BsThreeDotsVertical />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>select</PopoverHeader>

                        <Link to={`/editOrder/${ele._id}`}>
                          <PopoverBody
                            style={{ cursor: 'pointer' }}
                            _hover={{ background: 'blue', color: 'white' }}
                          >
                            Update
                          </PopoverBody>
                        </Link>

                        <PopoverBody
                          style={{ cursor: 'pointer' }}
                          _hover={{ background: 'red', color: 'white' }}
                          onClick={() => handalDelete(ele._id)}
                        >
                          Delete
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Ordertable;
