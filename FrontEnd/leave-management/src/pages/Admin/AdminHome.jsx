import React from "react";
import Nav from "./Nav";
import profile from "../images/profile.png";
import Pagination from "./Pagination";
import { useState } from "react";

const AdminHome = () => {
  const headers = [
    "Name",
    "Leave-Type",
    "From",
    "To",
    "Days",
    "Status",
    "Action",
  ];

  const data = [
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Declined"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Declined"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Declined"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Declined"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Declined"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Declined"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    ["Lingesh", "Sick Leave", "10/10/2024", "11/10/2024", "2 days", "Approved"],
    // Add more data rows as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7; // Adjust as needed
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const dataToDisplay = data.slice(startIndex, endIndex);

  return (
    <div className="flex w-screen h-screen">
      <Nav />
      <main className="flex flex-col pl-5 pr-5 pt-2  w-screen h-screen">
        <div className="w-full flex justify-between h-12 mb-5 items-center pl-5 pr-5 bg-slate-100 border-slate-950 rounded-lg ">
          <h2 className="font-semibold text-xl">Dashboard</h2>
          <div>
            <img src={profile} alt="profile>" width={40} height={40}></img>
          </div>
        </div>

        <div className="w-full h-full  ">
          <div className="w-full flex flex-col p-3 bg-slate-100 mb-5 border-slate-950 rounded-lg">
            <h2 className="font-semibold text-xl mb-3">Leaves</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#E7FBE6] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Total Available <br className="md:hidden" /> Leaves
                </h2>
              </div>

              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#D1E9F6] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Total Leaves <br className="md:hidden" /> Taken
                </h2>
              </div>

              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#eed2ec] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Total Leaves <br className="md:hidden" /> Pending
                </h2>
              </div>

              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#FFE0B5] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Percentage of Leaves <br className="md:hidden" /> Taken
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full h-auto bg-slate-100 p-3 border-slate-950 rounded-lg ">
          <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataToDisplay.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
