import { Chat, MoreVert, Search } from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import * as EmailValidator from "email-validator";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase";

const Sidebar = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = React.useState([]);
  let uid= session.user.uid

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "users", uid, "chats")),
        (snapshot) => {
          const post = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(post);
        }
      ),
    [db]
  );
console.log(posts)
  const createChat = async () => {
    const input = prompt(
      "Please enter an Email for the person you wish to chat  with"
    );
    if (!input) return null;
    if (EmailValidator.validate(input) && input !== session.user.email) {
      await setDoc(doc(db, "users", session.user.uid, "chats", input), {
        users: [session.user.email, input],
      });
    }
  };
  return (
    <div>
      {/* HEADER */}
      <div className="flex sticky top-0 bg-white  justify-between z-10 items-center p-4 h-[80px] border-b border-[whitesmoke]">
        {!session ? (
          <Avatar
            className="cursor-pointer hover:opacity-[0.8]"
            onClick={signIn}
          />
        ) : (
          <img
            src={session.user.image}
            className="h-10 w-10 rounded-full"
            onClick={signOut}
          />
        )}

        {session && (
          <div>
            <IconButton>
              {" "}
              <Chat />
            </IconButton>
            <IconButton>
              {" "}
              <MoreVert />
            </IconButton>
          </div>
        )}
      </div>
      {/* SEARCH */}
      <div className="flex  items-center p-[20px] rounded-[2px] ">
        <Search />
        <input
          type="text"
          placeholder="Search in chats"
          className="outline border-none outline-none flex-1"
        />
      </div>

      {/* BUTTON */}
      {session && (
        <Button onClick={createChat} className="w-full text-black bg-gray-300">
          Start a new chat
        </Button>
      )}

      {/*  LIST OF CHATS */}
    </div>
  );
};

export default Sidebar;
