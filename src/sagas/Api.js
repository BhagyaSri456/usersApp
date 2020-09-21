import axios from 'axios';

export function deleteUserApi(id) { return axios.delete(`https://reqres.in/api/users/${id}`); };

export function getUsersApi(page) { return axios.get(`https://reqres.in/api/users?page=${page}`); };

export function validateUserApi(userData) { return axios.post(`https://reqres.in/api/login`, userData); };

export function registerApi(userData) { return axios.post(`https://reqres.in/api/register`, userData); };

export function userDetailsApi(userId) { return axios.get(`https://reqres.in/api/users/${userId}`); };
