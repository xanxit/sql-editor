import { useState, useEffect } from "react";
import { BsPlayCircleFill, BsFillTrashFill, BsSaveFill } from "react-icons/bs";
const Editor = ({ openTab, setOpenTab, resetQuery }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (openTab.tab !== "none") {
      setQuery(`SELECT * FROM ${openTab?.tab}`);
    }
  }, [openTab]);
  return (
    <>
      <div className="relative md:mx-60 md:mt-20 md:mb-8">
        <textarea
          type="search"
          rows="7"
          id="default-search"
          className={
            query !== ""
              ? "block p-4 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
              : "block p-4 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-600"
          }
          placeholder="Write an SQL Query!"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          required
        />
      </div>
      <div className="flex justify-center mb-10">
        <div
          className="text-white cursor-pointer flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium mx-4 text-sm px-4 py-2"
          disabled={query === ""}
          onClick={() => {
            if (query !== "") {
              setOpenTab({
                tab: "categories",
                index: 0,
              });
            }
            // setQuery("");
          }}
        >
          <BsPlayCircleFill />
          &nbsp; Run Query
        </div>
        <div
          className="text-white cursor-pointer flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium mx-4 text-sm px-4 py-2"
          onClick={resetQuery}
        >
          <BsFillTrashFill />
          &nbsp; Reset Query
        </div>
        <div className="text-white cursor-pointer flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium mx-4 text-sm px-4 py-2">
          <BsSaveFill />
          &nbsp; Save Query
        </div>
      </div>
    </>
  );
};
export default Editor;
