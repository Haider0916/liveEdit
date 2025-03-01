import { useState } from "react";

const Toolbar = () => {
    const [isBoldActive, setBoldActive] = useState(false);
    const [isItalicActive, setItalicActive] = useState(false);

    return (
        <div className="flex space-x-2 p-2">
            <button
                className={`m-2 p-2 rounded transition-all ${isBoldActive ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-800"
                    }`}
                onClick={() => {
                    setItalicActive(false)
                    setBoldActive(!isBoldActive)
                }}
            >
                Bold
            </button>

            <button
                className={`m-2 p-2 rounded transition-all ${isItalicActive ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-800"
                    }`}
                onClick={() => {
                    setBoldActive(false)
                    setItalicActive(!isItalicActive)
                }}
            >
                Italic
            </button>
        </div>
    );
};

export default Toolbar;
