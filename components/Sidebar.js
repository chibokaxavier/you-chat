import { Chat, MoreVert, Search } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
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
      <div className="flex  items-center p-[5px] border-2 ">
        <Search />
        <input type="text" placeholder="Search in chats" className="outline border-none outline-none flex-1"/>
      </div>
    </div>
  );
};

export default Sidebar;
