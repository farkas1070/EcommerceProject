import React,{useState,ChangeEvent,FormEvent,useContext} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../Context/GlobalContext";
export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useContext(userContext);
  const [formData, setFormData] = useState({
    
    Email: '',
    passwordHash: '',
  });
  const handleNavigate=()=>{
    navigate("/Home");
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://localhost:7212/api/User/login', {
        Email: formData.Email,
        PasswordHash: formData.passwordHash,
      });
      setUser(response.data);
      
      handleNavigate();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Login Error:', error.response.data);
      } else {
        console.error('An error occurred during login:', error);
      }
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center md:-mb-24 md:justify-start ">
          <div className="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
            <div className="relative">
              <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
                <svg
                  id="patternId"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="a"
                      patternUnits="userSpaceOnUse"
                      width="40"
                      height="40"
                      patternTransform="scale(0.6) rotate(0)"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                      />
                      <path
                        d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                        stroke-width="1"
                        stroke="none"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="800%"
                    height="800%"
                    transform="translate(0,0)"
                    fill="url(#a)"
                  />
                </svg>
              </div>
              <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
                <svg
                  id="patternId"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="b"
                      patternUnits="userSpaceOnUse"
                      width="40"
                      height="40"
                      patternTransform="scale(0.5) rotate(0)"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                      />
                      <path
                        d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                        stroke-width="1"
                        stroke="none"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="800%"
                    height="800%"
                    transform="translate(0,0)"
                    fill="url(#b)"
                  />
                </svg>
              </div>

              <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                <div className="flex-auto p-6">
                  <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                    <a
                      href="#"
                      className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
                    >
                      <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">
                        Futurism.
                      </span>
                    </a>
                  </div>

                  <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
                    Welcome to futurism!
                  </h4>
                  <p className="mb-6 text-gray-500">
                    Please sign-in to access your account
                  </p>

                  <form onSubmit={handleLogin}  className="mb-4" action="#" method="POST">
                    <div className="mb-4">
                      <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                     
                        name="Email"
                        placeholder="Enter your email or username"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                          Password
                        </label>
                        <a
                          href="auth-forgot-password-basic.html"
                          className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                        >
                          <small className=" ">Forgot Password?</small>
                        </a>
                      </div>
                      <div className="relative flex w-full flex-wrap items-stretch">
                        <input
                        onChange={handleInputChange}
                          type="passwordHash"
                         
                          className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                          name="passwordHash"
                          placeholder="············"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="block">
                        <input
                        
                          className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                          type="checkbox"
                          id="remember-me"
                          style={{
                            backgroundImage:
                              'url(\'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"%3e%3cpath fill="none" stroke="%23fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10l3 3l6-6"/%3e%3c/svg%3e\')',
                          }}
                          
                        />
                        <label className="inline-block"> Remember Me </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      
                      <button
                      type="submit"
                        className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                        
                      >
                        Sign in
                      </button>
                    </div>
                  </form>

                  <p className="mb-4 text-center">
                    New on futurism?
                    <Link
                      to="/Register"
                      className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                    >
                      {" "}
                      Create an account{" "}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-8 text-3xl font-semibold leading-10">
            We work 10x faster than our compeititors and stay consistant. While
            they're bogged won with techincal debt, we're realeasing new
            features.
          </p>
          <p className="mb-4 text-3xl font-semibold">John Elmond</p>
          <p className="">Founder, Emogue</p>
          <p className="mb-7 text-sm opacity-70">Web Design Agency</p>
        </div>
        <img
          className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </div>
  );
}
