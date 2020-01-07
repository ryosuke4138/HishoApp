import axios from 'axios';

// const API_BASE_URL = 'http://127.0.0.1:3003'; // json-server
const API_BASE_URL = 'http://127.0.0.1:8000'; // Django

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

export function fetchTasks() {
  return client.get('/api/');
}

export function createTask(params) {
  return client.post('/api/', params);
}

export function editTask(id, params) {
  return client.put(`/api/${id}/`, params);
}

export function deleteTask(id) {
  return client.delete(`/api/${id}/`);
}