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
  const [users, setUsers] = useState<User>({
    id: 0,
    name: "",
    email: "",
    image_url: "",
    sns_url_tw: "",
    sns_url_fb: "",
    profile:"",
  }); // 状態保持（useState)上記で設定したUserの内容をsetUsersに保存、<User[]>([])の([])は初期値、<User[]>の[]は配列の型宣言

  const getUsers = async () => {
// ユーザー一覧をAPIから取得する関数（localhost:4000/usersから完全に取得するまでasyncで定義された関数内のawaitを使って処理を停止している、JSは同期処理をしてしまうため非同期処理が必要）
    const result = await axios.get("http://localhost:4000/users/1");
    setUsers(result.data); //resultに結果を入れて、そのデータを保持するためsetUsers(result.data)している
  };

  useEffect(() => {
    getUsers();
  }, []);
  // ページロード時に自動でgetUsers関数を発火（useEffect)コンポーネント読み込み時（マウント時）に発火

  console.log(users);

  return (
    <div>
      {users.id}
      {users.name}
    </div>
  );
};

export default Home;
