import React, { useState, useEffect,useMemo } from "react";
import { parseCSV } from "../utils";
import Container from "./Container";
import Table from "./Container/Table";
import Header from "./Header";
import axios from "axios";

const MainComponent = () => {
  const [header, setHeader] = useState([]);
  const [openTab, setOpenTab] = useState({
    tab: "none",
    index: 0,
  });
  const getData = async (fetchUrl) => {
    const res = await axios.get(fetchUrl);
    const data = await res?.data;
    const rawResults = parseCSV(atob(data.content));
    setHeader(rawResults);
  };
  useEffect(() => {
    if (openTab.tab !== "none") {
      const fetchUrl = `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${openTab?.tab}.csv?ref=master`;
      getData(fetchUrl);
    }
  }, [openTab]);
  const resetQuery=()=>{
    setOpenTab({
      tab: "none",
      index: 0,
    });
    setHeader([]);
  }
  // useMemo(() => {
  //   if (openTab.tab !== "none") {
  //     const fetchUrl = `/data/${openTab?.tab}.csv`;
  //     getData(fetchUrl);
  //   }
  // }, [openTab]);
  return (
    <div>
      <Header />
      <Container openTab={openTab} setOpenTab={setOpenTab} resetQuery={resetQuery} />
      <Table header={header} />
    </div>
  );
};
export default MainComponent;
