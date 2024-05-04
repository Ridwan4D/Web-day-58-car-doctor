import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// import gitLogo from "../assets/github.png";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const {signInUser,singUpWithApp} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [inError, setInError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);


  // sign up with app
  const handleAppSignIn = (provider) => {
    singUpWithApp(provider)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    setInError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged In");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/invalid-credential).") {
          setInError("Invalid User or Password");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SingIn- Tour Guide</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="antialiased bg-slate-200 py-7">
        <div className="max-w-lg mx-auto my-10 bg-white px-8 py-2 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Login</h1>
          <p className="text-slate-500">Hi, Welcome back 👋</p>

          <div className="my-3">
            <button
              className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              onClick={() => handleAppSignIn(googleProvider)}
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-6 h-6"
                alt=""
              />{" "}
              <span>Login with Google</span>
            </button>
            <button
              className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              onClick={() => handleAppSignIn(githubProvider)}
            >
              <img src=""className="w-8 h-8 rounded-full" alt="" />{" "}
              <span>Login with Github</span>
            </button>
          </div>
          <form onSubmit={handleLogin} className="my-5">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                />
              </label>
              <div className="flex flex-row justify-between">
                <div>
                  <label htmlFor="remember" className="">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 mr-1 border-slate-200 focus:bg-indigo-600"
                    />
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="font-medium text-indigo-600">
                    Forgot Password?
                  </a>
                </div>
              </div>
              {inError && <p className="text-sm text-red-600">{inError}</p>}
              <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </button>
              <p className="text-center">
                Not registered yet?{" "}
                <Link
                  to="/signUp"
                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span>Register now </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Login;
