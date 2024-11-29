const Balance = ({ balance }) => {
  return (
    <div className="flex items-center  px-5 py-2">
      <div>Balance : </div>
      <div className="mx-1">{balance}</div>
    </div>
  );
};

export default Balance;
