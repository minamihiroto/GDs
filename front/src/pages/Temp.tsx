import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string | null;
  email: string | null;
  image_url: string | null;
  sns_url_tw: string | null;
  sns_url_fb: string | null;
  profile: string | null;
};

const Home: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([]); // 状態保持（useState)
  const getUsers = async () => {
    // ユーザー一覧をAPIから取得する関数
    const result = await axios.get("http://localhost:4000/users");
    setUsers(result.data);
  };

  useEffect(() => {
    // ページロード時に自動でgetUsers関数を発火（useEffect)
    getUsers();
  }, []);

  return (
    <div>
      {users.length > 1 &&
        users.map((user) => {
          return (
            <>
              <span>
                id: {user.id} name: {user.name}
              </span>
              <br />
            </>
          );
        })}
    </div>
  );
};

export default Home;
