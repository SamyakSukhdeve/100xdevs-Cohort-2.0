import { Link } from "react-router-dom";

const BottomWarning = ({ lable, buttontext, to }) => {
  return (
    <div className="flex justify-center">
      <div className="text-sm font-normal">{lable}</div>
      <Link
        className=" text-sm cursor-pointer underline font-normal"
        to={to}
      >
        {buttontext}
      </Link>
    </div>
  );
};

export default BottomWarning;
