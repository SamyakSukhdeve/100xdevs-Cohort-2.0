const Button = ({ text ,onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {text}
    </button>
  );
};

export default Button;
