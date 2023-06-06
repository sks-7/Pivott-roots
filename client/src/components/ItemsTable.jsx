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
import { deleteItems, loadItems } from '../Redux/action';

const ItemsTable = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state);

  const toast = useToast();

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  const handalDelete = (id) => {
    if (window.confirm('Do you want to delete the user ?')) {
      dispatch(deleteItems(id));
      dispatch(loadItems());
    }
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="#e8f5fd">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Items Name</Th>

              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items &&
              items.map((ele, ind) => (
                <Tr key={ele._id}>
                  <Td>{ind}</Td>
                  <Td>{ele.Item}</Td>
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

                        <Link to={`/editItem/${ele._id}`}>
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

export default ItemsTable;
