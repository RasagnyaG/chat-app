import "@/styles/globals.css"
import "@/styles/auth.css"

import React, { useState } from 'react'
import Link from "next/link"
import { SignupInput } from "@/types/inputs/signuput"
import api from "@/utils/axios"
import { useRouter } from "next/router"
import Error from "@/components/error";

const Signup = () => {

    const [submitData, setSubmitData] = useState<Partial<SignupInput>>({});
    const [error, setError] = useState<string | undefined>()
    type SignupInputKeys = keyof typeof submitData;

    const router = useRouter();

    const handleChange = (key: SignupInputKeys, value: string) => {
        setSubmitData({ ...submitData, [key]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/auth/signup", submitData);
            if (res.status == 200) router.push("/")

            // handle errors thrown by the api
            else {
                if (res.status == 409) {
                    setError("User already exists, please signin in");
                    setTimeout(() => router.push("/auth/signin"), 3000)
                }
            }
        } catch (e: any) {
            setError(e.message)
        }
    }
    return (
        <div className="auth-form">
            <h1>Signup</h1>
            <input placeholder="Name" required onChange={(e) => handleChange("name", e.target.value)} />
            <input placeholder="Email" required onChange={(e) => handleChange("email", e.target.value)} />
            <input placeholder="Phone No." required onChange={(e) => handleChange("phone", e.target.value)} />
            <input placeholder="Password" required type="password" onChange={(e) => handleChange("password", e.target.value)} />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Signup</button>
            <Link href="/auth/signin/" style={{ color: "white" }} >Already have an account?</Link>
            {error && <Error message={error!} />}
        </div>
    )
}

export default Signup
