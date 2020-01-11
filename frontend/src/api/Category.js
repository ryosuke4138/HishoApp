import axios from 'axios';

// const API_BASE_URL = 'http://127.0.0.1:3003'; // json-server
const API_BASE_URL = 'http://127.0.0.1:8000'; // Django

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export function fetchCategories() {
  return client.get('/api/category/');
}

export function createCategory(params) {
  return client.post('/api/category/', params);
}

export function editCategory(id, params) {
  return client.put(`/api/category/${id}/`, params);
}

export function deleteCategory(id) {
  return client.delete(`/api/category/${id}/`);
}