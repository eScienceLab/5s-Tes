import MainMenubar from "./MainMenubar";
import NavbarLogo from "./NavbarLogo";
import UserMenu from "./UserMenu";

{
  /* Creates the main navigation bar using the NavbarLogo,
MainMenubar, and UserMenu components. */
}

export default function Navbar() {
  return (
    <div className="bg-background">
      <div className="flex h-14 items-center px-4">
        <NavbarLogo />
        <div className="ml-10 flex-1">
          <MainMenubar />
        </div>
        <div className="ml-10">
          <UserMenu username="Global AdminUser" />
        </div>
      </div>
    </div>
  );
}
