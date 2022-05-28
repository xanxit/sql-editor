import { useState, useEffect } from "react";
import { BsPlayCircleFill, BsFillTrashFill, BsSaveFill } from "react-icons/bs";
const Editor = ({
  query,
  setQuery,
  openTab,
  setOpenTab,
  resetQuery,
  savedQuery,
  setSavedQuery,
  setLoading,
}) => {
  const [isClicked, setisClicked] = useState(false);
  useEffect(() => {
    if (openTab.tab !== "none" && isClicked===false) {
      setQuery(`SELECT * FROM ${openTab?.tab}`);
    }
  }, [openTab,isClicked,setQuery]);

  useEffect(() => {
    localStorage.setItem("savedQuery", JSON.stringify(savedQuery));
  }, [savedQuery]);
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
      <div className="flex justify-center my-10">
        <div
          className="text-white cursor-pointer flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium mx-4 text-sm px-4 py-2"
          disabled={query === ""}
          onClick={() => {
            if (query !== "" && query!==`SELECT * FROM ${openTab?.tab}`) {
              setisClicked(true);
              setOpenTab({
                tab: "categories",
                index: 0,
              });
              setLoading(true);
            }
          }}
        >
          <BsPlayCircleFill />
          &nbsp; Run Query
        </div>
        <div
          className="text-white cursor-pointer flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium mx-4 text-sm px-4 py-2"
          onClick={() => {
            setQuery("");
            resetQuery();
          }}
        >
          <BsFillTrashFill />
          &nbsp; Reset Query
        </div>
        <div
          className="text-white cursor-pointer flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium mx-4 text-sm px-4 py-2"
          onClick={() => {
            if (query !== "") {
              setSavedQuery([...savedQuery, query]);
            }
          }}
        >
          <BsSaveFill />
          &nbsp; Save Query
        </div>
      </div>
    </>
  );
};
export default Editor;
