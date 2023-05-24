import { Chat, MoreVert, Search } from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="flex sticky top-0 bg-white  justify-between z-10 items-center p-4 h-[80px] border-b border-[whitesmoke]">
        <Avatar className="cursor-pointer hover:opacity-[0.8]" />
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
      <Button className="w-full text-black bg-gray-300">
        Start a new chat
      </Button>

      {/*  LIST OF CHATS */}
    </div>
  );
};

export default Sidebar;
