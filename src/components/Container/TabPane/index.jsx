import React from "react";
import Tabs from "./Tab.json";
const TabPane = ({ openTab, setOpenTab, setLoading }) => {
  return (
    <div>
      <h1 className="m-4 md:text-3xl text-xl font-bold flex justify-center text-blue-700">
        Available Tables
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full md:mx-6">
          <ul
            className="md:grid md:grid-cols-4 md:gap-4 flex flex-wrap list-none pt-3 pb-4"
            role="tablist"
          >
            {Tabs?.map((item) => (
              <li className="md:-mb-px md:mr-2 m-3 last:mr-0 flex w-full items-center justify-center text-center">
                <div
                  className={
                    "text-xs font-bold w-full uppercase px-5 py-3 shadow-lg rounded leading-normal cursor-pointer " +
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
                    setLoading(true);
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
    </div>
  );
};
export default TabPane;
