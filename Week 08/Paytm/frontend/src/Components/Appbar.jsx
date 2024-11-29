const Appbar = () => {
  return (
    <div className="shadow flex justify-between px-5 items-center">
      <div className="text-xl">PayTM App</div>
      <div className="flex items-center px-2 h-full">
        <div className="mr-2">Hello</div>
        <div className="rounded-full h-12 w-12 flex justify-center items-center m-2 bg-slate-200">
          <div className="flex justify-center text-xl items-center">U</div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
