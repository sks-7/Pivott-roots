import * as types from './actionTypes';
import axios from 'axios';

const getUsers = (user) => ({
  type: types.GET_USER,
  payload: user,
});

const userDelete = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const getsingleUser = (singleuser) => ({
  type: types.GET_SINGLE_USER,
  payload: singleuser,
});

const userUpdate = () => ({
  type: types.UPDATE_USER,
});

const token = localStorage.getItem('token');

export const loadUser = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8080/api/users/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8080/api/users/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(userDelete());
        dispatch(loadUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:8080/api/users/users`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(userAdded());

        dispatch(loadUser());
      })
      .catch((err) => {
        console.log('eror', err);
      });
  };
};

export const getSingleUsers = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8080/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        dispatch(getsingleUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8080/api/users/users/${id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(userUpdate());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// for orders

const getOrders = (order) => ({
  type: types.GET_ORDER,
  payload: order,
});

const orderDelete = () => ({
  type: types.DELETE_ORDER,
});

const orderAdd = () => ({
  type: types.ADD_ORDER,
});

const getsingleorder = (singleorder) => ({
  type: types.GET_SINGLE_ORDER,
  payload: singleorder,
});

const orderUpdate = () => ({
  type: types.UPDATE_ORDER,
});

export const loadOrder = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8080/api/users/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(getOrders(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteOrder = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8080/api/users/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(orderDelete());
        dispatch(loadOrder());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addOrder = (user) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:8080/api/users/orders`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(orderAdd());

        dispatch(loadOrder());
      })
      .catch((err) => {
        console.log('eror', err);
      });
  };
};

export const getSingleorders = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8080/api/users/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        dispatch(getsingleorder(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateOrder = (order, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8080/api/users/orders/${id}`, order, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(orderUpdate());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
