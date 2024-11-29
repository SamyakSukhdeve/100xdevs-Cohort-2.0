import { useState } from "react";
import BottomWarning from "../Components/BottomWarning";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="flex justify-center h-screen items-center bg-slate-400">
        <div className="flex flex-col bg-white w-80 rounded-md px-2 py-4">
          <div className="flex justify-center font-bold text-2xl">Signin</div>
          <div className="text-md text-gray-600 text-center">
            Enter Your Credentials to access your account
          </div>
          <InputBox
            lable={"Email"}
            placeholder={"samyaksukhdeve12@gmail.com"}
            type={"text"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            lable={"Password"}
            placeholder={"Enter password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text={"Signup"}
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signin",
                {
                  username: email,
                  password: password,
                }
              );
              console.log(response);

              localStorage.setItem("token", response.data.token);
            }}
          />
          <BottomWarning
            lable={"Dont have an account?"}
            buttontext={"Signup"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
