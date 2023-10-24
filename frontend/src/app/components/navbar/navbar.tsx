"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/app/assets/logo.png";
import Dialog from "../shared/dialog";
import CloseButton from "../../../../public/closeButton.svg";
import GithubLogo from "../../../../public/github.svg";
import GoogleLogo from "../../../../public/google.svg";

function LoginButton(props: any) {
  const { onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      Login
    </button>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  return (
    <div data-theme="light">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Page 1</a>
              </li>
              <li>
                <a>Page 2</a>
              </li>
              <li>
                <a>Page 3</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image src={logo} height={40} width={40} alt="IDV logo" />
          </Link>
        </div>
        <div className="navbar-end">
          <LoginButton onClick={handleToggle} />
          <Dialog open={open} onClose={handleToggle}>
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={handleToggle}
              >
                <Image src={CloseButton} alt="Close Button" />
              </button>
            </form>
            <div className="space-y-4">
              <div className="flex items-center justify-center bottom-4">
                <h1 className="text-xl">Select Login Provider</h1>
              </div>
              <div className="flex items-center justify-center">
                <div className="space-x-4">
                  <button className="btn btn-outline">
                    GitHub
                    <Image
                      src={GithubLogo}
                      height={30}
                      width={30}
                      alt="GitHub logo"
                    />
                  </button>
                  <button className=" btn btn-outline">
                    Google
                    <Image
                      src={GoogleLogo}
                      height={30}
                      width={30}
                      alt="Google logo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
