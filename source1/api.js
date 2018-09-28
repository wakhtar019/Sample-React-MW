import axios from 'axios'

export function fetchUsers() {
    // `axios` function returns promise, you can use any ajax lib, which can
    // return promise, or wrap in promise ajax call
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };