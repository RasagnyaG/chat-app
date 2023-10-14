import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export default function Home() {
  let token = cookies().get("token");
  if (!token) return redirect("/auth/signin/");
  return (
    <h1>Hello World</h1>
  )
}
