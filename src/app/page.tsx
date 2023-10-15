import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import StartChatPage from "@/components/startChatPage";
import "@/styles/globals.css"

export default function Home() {
  let token = cookies().get("token")?.value;
  if (!token) return redirect("/auth/signin/");
  return (
    <StartChatPage />
  )
}
