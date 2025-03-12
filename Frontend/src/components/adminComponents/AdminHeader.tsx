import { UserCircleIcon } from "@heroicons/react/24/solid";

const AdminHeader = () => {
  return (
    <>
      <div className="navbar bg-white shadow-sm px-5">
        <div className="flex-1">
          <a href="">
            <img src="/lifeboat2-logo.png" alt="logo" className="h-8 w-auto" />
          </a>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="flex items-center justify-center">
              <UserCircleIcon className="w-7" />
              <h5 className="me-4 ms-2 my-2">Admin</h5>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-black">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
