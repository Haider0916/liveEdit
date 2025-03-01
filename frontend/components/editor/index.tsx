import React from "react";
import Toolbar from "./components/toolbar"
import WhiteBoard from "./components/whiteboard"

const Editor = () => {
    return (
        <div className="flex justify-center flex-col items-center w-full h-screen bg-gray-200">
            {/* <Toolbar /> */}
            <WhiteBoard />
        </div>
    );
};

export default Editor;
