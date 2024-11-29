const InputBox = ({ lable, placeholder, onChange, type }) => {
  return (
    <div className="flex flex-col p-2">
      <div className="text-sm font-medium">{lable}</div>
      <input
        type={type}
        onChange={onChange}
        className="rounded-md text-sm my-1 bg-gray-100 outline-none border p-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
