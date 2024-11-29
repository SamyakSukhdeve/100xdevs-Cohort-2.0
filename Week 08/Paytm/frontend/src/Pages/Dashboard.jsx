import { useState } from "react";
import Appbar from "../Components/Appbar";
import Balance from "../Components/Balance";
import InputBox from "../Components/InputBox";
import UserCard from "../Components/UserCard";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUser] = useState([]);
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
      .then((response) => {
        setUser(response.data.user);
      });

    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((bal) => setBalance(bal.data.balance));
  }, [filter]);
  return (
    <div>
      <Appbar></Appbar>
      <Balance balance={Math.floor(balance * 100) / 100}></Balance>
      <div className="flex flex-col px-5 py-2">
        <div>Users</div>
        <InputBox
          type={"text"}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={"Search user.."}
        ></InputBox>
      </div>
      {users.map((user) => (
        <UserCard
          key={user._id}
          firstName={user.firstName}
          lastName={user.lastName}
          usernameLetter={user.firstName[0].toUpperCase()}
          onClick={() => {
            navigate(
              "/transfer?id=" +
                user._id +
                "&name=" +
                user.firstName +
                " " +
                user.lastName
            );
          }}
        />
      ))}
    </div>
  );
};

export default Dashboard;
