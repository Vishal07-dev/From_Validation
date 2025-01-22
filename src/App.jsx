import React, { useEffect, useState } from "react";

const App = () => {
  const [password, setPassword] = useState(true);
  const [passwordvalue, setPasswordvalue] = useState();
  const [passerror, setPasserror] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const[emailerror,setEmailerror]=useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const passwordhandle = (e) => {
    e.preventDefault();
    setPassword(!password);
  };

  const emailRegex=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isPasswordValid = passwordvalue && passwordvalue.length >= 6;
    const isEmailValid = emailRegex.test(email);
  
    
  
    setPasserror(!isPasswordValid);
    setEmailerror(!isEmailValid);
  
    const isValid = isPasswordValid && isEmailValid;
  
  
    if (isValid) {
      // Show popup
      setIsPopupVisible(true);
  
      // Auto-close popup after 3 seconds
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000);
  
      // Clear input fields
      setUsername("");
      setEmail("");
      setPasswordvalue("");
    } else {
      setIsPopupVisible(false);
    }
  };
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-2xl rounded-lg w-full max-w-md p-6 sm:w-[80%] lg:w-[40%]">
        <h1 className="font-serif text-center text-3xl sm:text-4xl p-2 mb-4">
          Sign In/Up Form
        </h1>
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col gap-4">
            <label className="text-lg">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-black p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />

            <label className="text-lg">Password</label>
            <div className="relative">
              <input
                type={password ? "password" : "text"}
                required
                value={passwordvalue}
                onChange={(e) => setPasswordvalue(e.target.value)}
                className="text-black p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              {passwordvalue && (
                <p
                  className="absolute right-3 top-3 text-sm text-blue-700 hover:text-blue-500"
                  onClick={passwordhandle}
                >
                  {password ? "Show" : "Hide"}
                </p>
              )}
            </div>
            {passerror && (
              <h1 className="text-sm  text-red-300 mt-1 font-medium">
                Password must be 6 or more characters.
              </h1>
            )}

            <label className="text-lg">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
       {emailerror && (
              <h1 className="text-sm w-fit p-1 rounded-lg  text-red-300 mt-1 font-medium">
                email is not valid
              </h1>
            )}

          </div>
          <div className="flex flex-col mt-10">
            <button
              type="submit"
              className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 "
            >
              Submit
            </button>
          </div>
        </form>

      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-xl w-11/12 max-w-sm text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Form Submitted!
            </h3>
            <p className="text-gray-600 text-sm">
              Thank you! Your form has been successfully submitted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
