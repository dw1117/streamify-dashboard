// components/DataTable.js
import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import { useDashboard } from "../context/DashboardContext";

const DataTable = () => {
  const { data } = useDashboard();
  const columns = useMemo(
    () => [
      { Header: "Song Name", accessor: "song" },
      { Header: "Artist", accessor: "artist" },
      { Header: "Date Streamed", accessor: "dateStreamed" },
      { Header: "Stream Count", accessor: "streamCount" },
      { Header: "User ID", accessor: "userId" },
    ],
    []
  );
  const tableInstance = useTable(
    { columns, data: data.recentStreams },
    useFilters,
    useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg">
      <table {...getTableProps()} className="table-auto w-full">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-4 text-left"
                >
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
