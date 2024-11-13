import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div>
        <img src={logo} alt="" className="w-[300px]"/>
      </div>
    </div>
  );
};

export default Header;
