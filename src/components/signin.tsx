import "@/styles/auth.css"
import Link from "next/link"
import { useState } from "react"
import { redirect } from "next/navigation"
import api from "@/utils/axios";
import Error from "@/components/error";
import { useRouter } from "next/router";
const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | undefined>()
    const router = useRouter()

    const handelSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/auth/signin", {
                email,
                password
            });
            if (res.status == 200) router.push("/")

            // handle errors thrown by the api
            else {
                if (res.status == 404) {
                    setError("User not Found, please Signup");
                    setTimeout(() => router.push("/auth/signup"), 3000)
                }
                if (res.status == 401) {
                    setError("Invalid Password, try again");
                }
            }
        } catch (e: any) {
            setError(e.message)
        }
    }
    return (
        <div className="auth-form">
            <h1>Signin</h1>
            <input placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={(e) => handelSubmit(e)}>Signin</button>
            <Link href="/auth/signup/" style={{ color: "white" }}>Don't have an account?</Link>
            {error && <Error message={error!} />}
        </div>
    )
}

export default Signin