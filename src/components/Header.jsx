import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div>
        <img src={logo} alt="" className="w-[300px]" />
      </div>
      <h2 className="text-gray-400">Journalism without Fear or Favorr</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
