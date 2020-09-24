import React, { FunctionComponent, useEffect } from "react";
import axios from 'axios';

type User = {
  id: number;
  name: string | null;
  email: string | null;
  image_url: string | null;
  sns_url_tw: string | null;
  sns_url_fb: string | null;
  profile: string | null;
}

const Home: FunctionComponent = () => {
  const getUsers = () => {
    axios.get('http://localhost:4000/users').then((res) => {
      console.log(res)
    })
    // const result: User[] = axios.get('http://localhost:4000/users')
    // const result2: User[] = axios.get('http://localhost:4000/users/1')
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <span>Aaaa</span>
    </div>
  );
};

export default Home;
