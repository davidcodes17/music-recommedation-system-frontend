import Avatar from "@/components/common/avatar";
import Logo from "@/components/common/logo";
import { useAuthStore } from "@/store/auth-store";
import { Logout } from "iconsax-reactjs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex p-10 justify-between">
        <Logo className="w-20 rounded-full" />
        <div className="flex items-center gap-3">
          <Avatar name={user?.name || "N/A"} email={user?.email || "N/A"} />
          <div
            className="bg-[#fff] p-5 rounded-full cursor-pointer shadow-2xs"
            onClick={() => {
              navigate("/");
              logout();
              localStorage.removeItem("token");
            }}
          >
            <Logout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
