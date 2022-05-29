import { useTable, usePagination, useSortBy } from "react-table";
import "./table.css";

const DataTable = ({ columns, data }) => {
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
  } = tableInstance;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg capitalize md:ml-10">
      <table {...getTableProps()} className="overflow-x-auto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column) => (
                <th {...column?.getHeaderProps()}>
                  {column?.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map((row) => {
            prepareRow(row);
            return (
              <tr {...row?.getRowProps()}>
                {row?.cells.map((cell) => {
                  return (
                    <td {...cell?.getCellProps()}>{cell?.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {canPreviousPage || canNextPage ? (
        <div className="flex items-center justify-end">
          <button
            className={
              canPreviousPage
                ? "m-4 bg-white border-2 shadow-md py-2 px-4"
                : "m-4 bg-gray-200 border-2 shadow-md py-2 px-4"
            }
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
          >
            {"<"}Previous
          </button>
          <p className="font-semibold ">Select the Page Size:&nbsp;</p>
          <select
            className="select bg-gray-100 p-2 select-bordered max-w-xs"
            onChange={(e) => {
              setPageSize(e.target.value);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <button
            className={
              canNextPage
                ? "m-4 bg-white border-2 shadow-md py-2 px-4"
                : "m-4 bg-gray-200 border-2 shadow-md py-2 px-4"
            }
            disabled={!canNextPage}
            onClick={() => nextPage()}
          >
            Next{">"}
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default DataTable;
