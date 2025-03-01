import React, { useRef } from "react";

const WhiteBoard = () => {

    const isBoldActive = useRef<boolean>(null);
    const isItalicActive = useRef(false);
    const textTracker = useRef<HTMLDivElement>(null);

    const handleFormatting = (e: any) => {
        const newText = e.data;
        if (!textTracker.current || !newText) return;
        if (isBoldActive.current === false) return;

        e.preventDefault();

        if (isBoldActive.current === null) {
            isBoldActive.current = false;
            textTracker.current.appendChild(document.createTextNode(newText));
            handleCursorPosition(textTracker.current)
            return;
        }

        const lastChild = textTracker.current.lastChild;

        if (!lastChild) return;

        //@ts-ignore
        if (lastChild && lastChild.tagName === "B") {
            lastChild.textContent += newText;
        } else {
            const boldTag = document.createElement("b");
            boldTag.textContent = newText;
            textTracker.current.appendChild(boldTag);
        }

        handleCursorPosition(textTracker.current)

    }

    function handleCursorPosition(editor: HTMLDivElement) {
        const selection = window.getSelection();

        if (selection) {
            const range = document.createRange();

            // Move cursor to the end of `textTracker.current`
            range.selectNodeContents(editor);
            range.collapse(false); // Collapse to end

            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    return (
        <>
            <div className="flex space-x-2 p-2">
                <button
                    className={`m-2 p-2 rounded transition-all ${isBoldActive ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-800"
                        }`}
                    onClick={() => {
                        isItalicActive.current = false
                        isBoldActive.current = isBoldActive.current === true ? null : true;
                    }}
                >
                    Bold
                </button>

                <button
                    className={`m-2 p-2 rounded transition-all ${isItalicActive ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-800"
                        }`}
                    onClick={() => {
                        isBoldActive.current = false
                        isItalicActive.current = !isItalicActive.current
                    }}
                >
                    Italic
                </button>
            </div>

            <div
                ref={textTracker}
                contentEditable="true"
                className=" w-1/2 min-h-[70%] border border-gray-300 rounded-md bg-white p-4 text-lg focus:outline-none shadow-md text-black"
                //@ts-ignore
                placeholder="Write something..."
                onBeforeInput={handleFormatting}
            >
            </div>
        </>

    )
}

export default WhiteBoard;

/**
 * not able to add space in the bold
*/