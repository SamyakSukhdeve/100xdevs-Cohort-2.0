import Button from "./Button";

const UserCard = ({ usernameLetter, lastName, firstName, onClick }) => {
  return (
    <div className="flex flex-row hover:bg-slate-100 justify-between px-10">
      <div className=" flex items-center  p-2">
        <div className="h-12 w-12 flex justify-center items-center bg-orange-400 rounded-full">
          <div className="text-2xl font-mono font-bold">{usernameLetter}</div>
        </div>
        <div className="px-3 font-semibold">
          {firstName} {lastName}
        </div>
      </div>
      <Button text={"Pay"} onClick={onClick}></Button>
    </div>
  );
};

export default UserCard;
