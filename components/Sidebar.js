import { Chat, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex">
        <Avatar />
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
    </div>
  );
};

export default Sidebar;
