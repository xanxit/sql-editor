import { useState, useEffect, useMemo } from "react";
import DataTable from "./DataTable";

const Table = (props) => {
  const { header } = props;
  const [loading, setLoading] = useState(true);
  const data = useMemo(() => header, [header]);
  useEffect(() => setLoading(false), [header]);
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
        <div>Loading...</div>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
};
export default Table;
