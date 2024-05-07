import React, { useState } from "react";
import bcrypt from "bcryptjs-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Replace 'YOUR_ORIGINAL_PASSWORD' with your actual password stored in .env
    const originalPassword = process.env.REACT_APP_ORIGINAL_PASSWORD || "";

    // Hash the input password
    const hashedInputPassword = bcrypt.hashSync(password, 10);

    // Compare the hashed input password with the hashed original password
    const isPasswordCorrect = bcrypt.compareSync(
      originalPassword,
      hashedInputPassword
    );

    if (isPasswordCorrect) {
      sessionStorage.setItem("fail", hashedInputPassword);
      window.location.reload();
    } else {
      alert("Invalid password. Please try again.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
        <h2 className="text-2xl mb-4">Login Page</h2>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
