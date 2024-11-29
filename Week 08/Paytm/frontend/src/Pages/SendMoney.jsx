import { useSearchParams } from "react-router-dom";
import Button from "../Components/Button";
import InputBox from "../Components/InputBox";
import axios from "axios";
import { useState } from "react";

const SendMoney = () => {
  const [searchPrams] = useSearchParams();
  const name = searchPrams.get("name");
  const id = searchPrams.get("id");

  const [amount, setAmount] = useState("");
  return (
    <div className="flex justify-center h-screen items-center bg-slate-500">
      <div className="w-96 flex flex-col bg-slate-50 rounded-lg ">
        <div className="text-center text-3xl font-semibold pb-10 pt-5">
          Send Money
        </div>
        <div className="flex items-center mx-5">
          <div className="flex rounded-full h-12 w-12 font-semibold text-xl justify-center items-center bg-orange-200">
            <div>{name[0].toUpperCase()}</div>
          </div>
          <div className="mx-5 font-semibold text-xl">{name}</div>
        </div>
        <label className="mx-5">Amount (in Rs)</label>
        <InputBox
          type={"number"}
          placeholder={"Enter Amount"}
          onChange={(e) => setAmount(e.target.value)}
        ></InputBox>
        <Button
          text={"Send Money"}
          onClick={() => {
            axios.post(
              "http://localhost:3000/api/v1/account/transfer",
              {
                to: id,
                amount: amount,
              },
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            );
          }}
        ></Button>
      </div>
    </div>
  );
};

export default SendMoney;
