import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../redux/authSlice";
import axios from "axios";

const LoginForm = () => {
    // const dispatch = useDispatch();

    const [formData, setFormData] = useState({email: "", password: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // try {
        //   const response = await axios.post("/api/auth/login", formData); // api endpoint is /api/auth/login
        //   dispatch(login(response.data.user));
        //   // actions after successful login
        // } catch (error) {
        //   console.error("Login failed:", error);

        // }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
