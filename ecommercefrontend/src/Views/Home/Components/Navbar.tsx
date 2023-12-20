import * as React from "react";
import Box from "../../../Assets/Photos/shoebox.png";
import {Link} from "react-router-dom"
import { Badge} from "@material-tailwind/react";
export interface IAppProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const App: React.FC<IAppProps> = ({ setIsOpen }) => {
  return (
    <header className=" shadow">
      <div className="relative flex max-w-screen-xl flex-col justify-center overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
        <div className="flex items-center space-x-4">
          {/* Company Logo */}
          <img src={Box} alt="Company Logo" className="h-8 w-8" />
          {/* Company Name */}
          <span className="text-black font-custom text-xl font-custom2">
            Shuuz
          </span>
        </div>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          onClick={() => {
            setIsOpen(true);
          }}
          className="absolute right-4 top-5 cursor-pointer sm:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-labelledby="header-navigation"
          className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start"
        >
          <h2 className="sr-only" id="header-navigation">
            Header navigation
          </h2>
          <ul className="flex flex-col items-center sm:flex-row">
            <Link to="">
            <li className="text-gray-800 sm:mr-12 mt-1">Sales</li>
            </Link>
            <Link to="">
            <li className="text-gray-800 sm:mr-12 mt-1">All Items</li>
            </Link>

            <Link to="">
            <li className="text-gray-800 sm:mr-12 mt-1">Brands</li>
            </Link>
          </ul>
          <ul className="mt-4 flex sm:mt-0">
            <button className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl  text-gray-600 hover:text-black hover:shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <Badge content="5" placement="bottom-end" className="mb-3 ml-3">
            <Link to="/Home/Cart" className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl  text-gray-600 hover:text-black hover:shadow">
              <svg
                width="800px"
                className="h-11 w-11"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </Link>
            </Badge>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl  text-gray-600 hover:text-black hover:shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default App;
