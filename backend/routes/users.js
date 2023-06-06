const express = require('express');
const authenticateToken = require('../middleware/roleCheck');
const router = express.Router();
const User = require('../models/User');
const Order = require('../models/Order');
const Item = require('../models/Items');

// Get all users (requires admin role)

// router.post('/users/signup', async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);

//     res.send(newUser);
//   } catch (e) {
//     console.log(e, 'something went wrong');
//   }
// });

router.get('/users', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  // Retrieve all users from the database
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Get single users

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const singleUser = await User.findById({ _id: id });

    res.status(201).json({ message: 'Getting single User', singleUser });
  } catch (e) {
    res.status(501).json({ message: 'something went wrong', e });
  }
});

// Create a new user (requires admin role)
router.post('/users', authenticateToken, async (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const newUser = await User.create(req.body);

    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }

  // Create a new user using the request body
  // const newUser = new User(req.body);

  // // Save the new user to the database
  // newUser
  //   .save()
  //   .then((user) => {
  //     res.status(201).json({ message: 'User created successfully', user });
  //   })
  //   .catch((error) => {
  //     res.status(500).json({ message: 'Internal server error' });
  //   });
});

// Update a user (requires admin role)
router.put('/users/:id', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.params;
  const updatedUser = req.body;

  // Update the user in the database
  User.findByIdAndUpdate(id, updatedUser, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User updated successfully', user });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Delete a user (requires admin role)
router.delete('/users/:id', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.params;

  // Delete the user from the database
  User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Get all orders (requires admin role)

router.get('/orders', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'accounts') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  // Retrieve all orders from the database
  Order.find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// geting single order

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const singleOrder = await Order.findById({ _id: id });

    res.status(201).json({ message: 'Getting single Order', singleOrder });
  } catch (e) {
    res.status(501).json({ message: 'something went wrong', e });
  }
});

// Create a new order (requires admin role)
router.post('/orders', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'accounts') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  // Create a new order using the request body
  const newOrder = new Order(req.body);

  // Save the new order to the database
  newOrder
    .save()
    .then((order) => {
      res.status(201).json({ message: 'Order created successfully', order });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Update an order (requires admin role)
router.put('/orders/:id', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'accounts') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.params;
  const updatedOrder = req.body;

  // Update the order in the database
  Order.findByIdAndUpdate(id, updatedOrder, { new: true })
    .then((order) => {
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json({ message: 'Order updated successfully', order });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Delete an order (requires admin role)
router.delete('/orders/:id', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'accounts') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.params;

  // Delete the order from the database
  Order.findByIdAndDelete(id)
    .then((order) => {
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json({ message: 'Order deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Get all items (requires admin role)
router.get('/items', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'customer_executive') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  // Retrieve all items from the database
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// geting single Items

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const singleItems = await Item.findById({ _id: id });

    res.status(201).json({ message: 'Getting single Item', singleItems });
  } catch (e) {
    res.status(501).json({ message: 'something went wrong', e });
  }
});

// Create a new item (requires admin role)
router.post('/items', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'customer_executive') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  // Create a new item using the request body
  const newItem = new Item(req.body);

  // Save the new item to the database
  newItem
    .save()
    .then((item) => {
      res.status(201).json({ message: 'Item created successfully', item });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Update an item (requires admin role)
router.put('/items/:id', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'customer_executive') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.params;
  const updatedItem = req.body;

  // Update the item in the database
  Item.findByIdAndUpdate(id, updatedItem, { new: true })
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json({ message: 'Item updated successfully', item });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Delete an item (requires admin role)
router.delete('/items/:id', authenticateToken, (req, res) => {
  // Check if the user has the required role
  if (req.user.role !== 'admin' && req.user.role !== 'customer_executive') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const { id } = req.params;

  // Delete the item from the database
  Item.findByIdAndDelete(id)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json({ message: 'Item deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
