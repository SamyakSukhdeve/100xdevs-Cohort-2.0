import { useState } from "react";
import BottomWarning from "../Components/BottomWarning";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";
import axios from "axios";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="flex justify-center h-screen items-center bg-slate-400">
        <div className="flex flex-col bg-white w-80 rounded-md px-2 py-4">
          <div className="flex justify-center font-bold text-2xl">Signup</div>
          <div className="text-md text-gray-600 text-center">
            Enter Your information to create your account
          </div>
          <InputBox
            lable={"First Name"}
            placeholder={"samyak"}
            type={"text"}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            lable={"Last Name"}
            placeholder={"sukhdeve"}
            type={"text"}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            lable={"Email"}
            type={"email"}
            placeholder={"samyksukhadeve12@gmail.com"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            lable={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            text={"Signup"}
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  firstName: firstName,
                  lastName: lastName,
                  username: email,
                  password: password,
                }
              );
              localStorage.setItem("token", response.data.token);
            }}
          />
          <BottomWarning
            lable={"Already have an account?"}
            buttontext={"Login"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
