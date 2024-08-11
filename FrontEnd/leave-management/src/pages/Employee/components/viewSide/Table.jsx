import React, { useState } from 'react';
import Pagination from './components/Pagination';

function Table() {
  const tableHead = ["Name", "Leave Type", "From", "To", "Days", "Status"];
  const data = [
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Pendiadghsfih"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "asfaesrhrsaZ"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Pendiadghsfih"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "asfaesrhrsaZ"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Pendiadghsfih"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "asfaesrhrsaZ"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Approved"],
    ["kishore", "Sick Leave", "10/10/2024", "10/10/2024", "1 day", "Pendiadghsfih"],
    
    // Add more data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Adjust the number of rows per page

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get current page data
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <div className='  w-[98%] my-3 p-5 bg-slate-100 rounded-lg'>
        <h1 className='text-xl font-semibold mb-2'>
          Leave Log
        </h1>
        <div className='flex flex-wrap flex-col w-[100%]'>
          <table className='table-fixed '>
            <thead className="divide-y divide-gray-200 bg-white">
              <tr className="bg-gray-50">
                {tableHead.map((val, index) => (
                  <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((val, index) => (
                <tr key={index}>
                  {val.map((cell, idx) => (
                    <td key={idx} className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Render Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
}

export default Table;
