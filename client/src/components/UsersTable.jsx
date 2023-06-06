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

import { deleteUser, loadUser } from '../Redux/action';

const UsersTable = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state);

  const toast = useToast();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const handalDelete = (id) => {
    if (window.confirm('Do you want to delete the user ?')) {
      dispatch(deleteUser(id));
      dispatch(loadUser());
    }
  };

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="#e8f5fd">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((ele, ind) => (
                <Tr key={ele._id}>
                  <Td>{ind}</Td>
                  <Td>{ele.username}</Td>
                  <Td>{ele.role}</Td>

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

                        <Link to={`/edit/${ele._id}`}>
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

export default UsersTable;
