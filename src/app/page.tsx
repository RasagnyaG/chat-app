import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import StartChatPage from "@/components/startChatPage";

export default function Home() {
  let token = cookies().get("token");
  if (!token) return redirect("/auth/signin/");
  return (
    <StartChatPage />
  )
}
