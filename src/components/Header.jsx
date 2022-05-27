const Header = () => {
  return (
    <header className="text-gray-600 shadow-2xl body-font">
      <div className="shadow-xl flex p-2 md:flex-row items-center justify-between">
        <div className="flex items-center text-base">
          <img className="w-32 p-2" src="/logo.jpg" alt="logo" />
        </div>
        <div>
          <p className="flex md:mr-8 justify-center font-bold md:text-xl">Atlan SQL Editor Task</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
