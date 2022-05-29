import React, { useState, useEffect } from "react";
import { parseCSV } from "../utils";
import Container from "./Container";
import Table from "./Container/Table";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MainComponent = () => {
  const [header, setHeader] = useState([]);
  const [openTab, setOpenTab] = useState({
    tab: "none",
    index: 0,
  });
  const [loading, setLoading] = useState(false);

  const notify = (t) => {
    t === 1 ? toast("No Data found.") : toast(`Query executed successfully`);
  };
  const getData = async (fetchUrl) => {
    const res = await axios.get(fetchUrl);
    if (res.status !== 200) {
      setLoading(false);
      notify(1);
      return;
    }
    const data = await res?.data;
    const rawResults = parseCSV(atob(data.content));
    setHeader(rawResults);
    setLoading(false);
    notify(2);
  };
  useEffect(() => {
    if (openTab.tab !== "none") {
      const fetchUrl = `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${openTab?.tab}.csv?ref=master`;
      getData(fetchUrl);
    }
  }, [openTab]);
  const resetQuery = () => {
    setOpenTab({
      tab: "none",
      index: 0,
    });
    setHeader([]);
  };

  return (
    <div>
      <Header />
      <Container
        openTab={openTab}
        setOpenTab={setOpenTab}
        resetQuery={resetQuery}
        loading={loading}
        setLoading={setLoading}
      />
      <ToastContainer />
      <Table header={header} loading={loading} setLoading={setLoading} />
    </div>
  );
};
export default MainComponent;
