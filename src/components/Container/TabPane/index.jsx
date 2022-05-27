import React from "react";
import Tabs from "./Tab.json";
const TabPane = ({openTab,setOpenTab}) => {
  return (
    <>
    <h1 className="m-4 text-xl font-semibold flex justify-center text-blue-700">Available Tables</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:mx-6">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {Tabs?.map((item) => (
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal cursor-pointer " +
                    (openTab.index === item?.id && openTab.tab === item?.name
                      ? "text-white bg-blue-600"
                      : "text-blue-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab({
                      tab: item?.name,
                      index: item?.id,
                    });
                  }}
                  data-toggle="tab"
                  role="tablist"
                >
                  {item?.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TabPane;
