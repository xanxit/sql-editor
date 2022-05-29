import { useMemo } from "react";
import DataTable from "./DataTable";

const Table = ({ header, loading }) => {
  const data = useMemo(() => header, [header]);
  const columns = useMemo(() => {
    if (header?.length === 0) {
      return [];
    }
    return Object?.keys(header?.[0])?.map((key) => ({
      Header: key,
      accessor: key,
      defaultCanSort: true,
    }));
  }, [header]);
  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center space-x-2">
          <div
            className="spinner-border border-gray-500 animate-spin inline-block w-20 h-20 border-4 rounded-full"
            role="status"
          ></div>
          <div className="visually-hidden">Loading...</div>
        </div>
      ) : (
        <>
          <DataTable columns={columns} data={data} />
        </>
      )}
    </div>
  );
};
export default Table;
