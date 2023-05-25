import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { Login } from "@mui/icons-material";
import { useEffect } from "react";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    const fetchSession = async () => {
      if (session) {
        await setDoc(doc(db, "users", session.user.uid), {
          email: session.user.email,
          photoUrl: session.user.image,
        });
      }
    };
    fetchSession();
  }, [session]);

  return (
    <>
      <Head>
        <title>YOU CHAT</title>
      </Head>
      <Sidebar />
    </>
  );
}
