import DropDown from "@/components/Nav/DropDown";
import NavItems from "@/components/Nav/NavItems";

const Nav: React.FC = () => {
  return (
    <nav className="w-screen px-8 py-5 fixed bg-darker z-10 select-none">
      <NavItems />
      <DropDown />
    </nav>
  );
};

export default Nav;
