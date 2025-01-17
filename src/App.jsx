import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import UserList from './components/UserList';

function App() {
  const axiosInstance = axios.create({
    baseURL: 'http://34.205.24.112:8080'
  });
  return (
    <>
      <UserList axiosInstance={axiosInstance} />
    </>
  )
}

export default App
