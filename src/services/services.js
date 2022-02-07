import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body) {
  return axios.post(`${BASE_URL}/signup`, body);
}

function login(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

function getUser(token) {
  const config = createConfig(token);
  return axios.get(`${BASE_URL}/transactions`, config);
}

function addIncome(token, body) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/income`, body, config);
}

function addExpense(token, body) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/expense`, body, config);
}

function deleteTransaction(token, id) {
  const config = createConfig(token);
  return axios.delete(`${BASE_URL}/transactions/${id}`, config);
}

function editTransaction(token, id, body) {
  const config = createConfig(token);
  return axios.put(`${BASE_URL}/transactions/edit/${id}`, body, config);
}

export const services = {
  signUp,
  login,
  getUser,
  addIncome,
  addExpense,
  deleteTransaction,
  editTransaction,
};
