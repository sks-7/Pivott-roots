import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import AddUsers from '../components/AddUsers';
import UsersTable from '../components/UsersTable';
import { useNavigate } from 'react-router-dom';
import AddOrders from '../components/AddOrders';
import Ordertable from '../components/Ordertable';
import { ADD_ITEMS } from '../Redux/actionTypes';
import AddItems from '../components/AddItems';
import ItemsTable from '../components/ItemsTable';

const Dashboard = () => {
  const role = {
    admin: 'admin',
    accounts: 'accounts',
    customer_executive: 'customer_executive',
  };
  const navigate = useNavigate();

  const handalLogout = () => {
    localStorage.removeItem('token');

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const renderAccordions = () => {
    if (role.admin === 'admin') {
      return (
        <>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Uers Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AddUsers />
              <br />
              <br />
              <UsersTable />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Orders details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AddOrders />
              <br />
              <br />
              <Ordertable />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Customers details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AddItems />
              <br />
              <br />
              <ItemsTable />
            </AccordionPanel>
          </AccordionItem>
        </>
      );
    } else if (role.customer_executive === 'customer_executive') {
      return (
        <>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Customers details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AddItems />
              <br />
              <br />
              <ItemsTable />
            </AccordionPanel>
          </AccordionItem>
        </>
      );
    } else if (role.accounts === 'accounts') {
      return (
        <>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Orders details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AddOrders />
              <br />
              <br />
              <Ordertable />
            </AccordionPanel>
          </AccordionItem>
        </>
      );
    } else {
      return null; // Handle unknown role or show default UI
    }
  };

  return (
    <div>
      <Flex gap={10} justifyContent={'center'} mt="20px">
        {/* <Text fontSize={30} fontWeight={500}>
          {role}
        </Text> */}
        <Button onClick={handalLogout}>LogOut</Button>

        <Accordion allowToggle>{renderAccordions()}</Accordion>
      </Flex>
    </div>
  );
};

export default Dashboard;
