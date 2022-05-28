import { useState } from "react";
import Editor from "./QueryEditor";
import SavedQuery from "./Saved Queries";
import TabPane from "./TabPane";

const Container = ({
  openTab,
  setOpenTab,
  resetQuery,
  loading,
  setLoading,
}) => {
  var storedNames = JSON.parse(
    localStorage.getItem("savedQuery")
      ? localStorage.getItem("savedQuery")
      : "[]"
  );
  const [savedQuery, setSavedQuery] = useState(storedNames);
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <>
      <div className={savedQuery.length>0?"md:grid md:grid-cols-2 md:gap-4 flex flex-wrap":"md:mx-20"}>
        <TabPane
          openTab={openTab}
          setOpenTab={setOpenTab}
          setLoading={setLoading}
        />
        <div>
          {savedQuery.length > 0 ? (
            <>
              <h1 className="m-4 md:text-3xl text-xl font-bold flex items-center justify-center text-blue-700">
                Saved Queries&nbsp;
                <span className="text-lg">
                  (You need to save queries first)
                </span>
              </h1>

              <SavedQuery savedQuery={savedQuery} setQuery={setQuery} />
            </>
          ) : null}
        </div>
      </div>
      <Editor
        openTab={openTab}
        query={query}
        setQuery={setQuery}
        setOpenTab={setOpenTab}
        resetQuery={resetQuery}
        savedQuery={savedQuery}
        setSavedQuery={setSavedQuery}
        setLoading={setLoading}
      />
    </>
  );
};
export default Container;
