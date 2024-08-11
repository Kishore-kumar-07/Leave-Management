import React, { useState } from 'react';
import Pagination from './components/Pagination';

function Table(props) {
  const tableHead = ["Name", "Leave Type", "From", "To", "Days", "Status"];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Adjust the number of rows per page

  // Calculate total pages
  const totalPages = Math.ceil(props.data.length / rowsPerPage);

  // Get current page data
  const currentData = props.data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <>
      <div className='w-[98%] my-3 p-5 bg-slate-100 rounded-lg'>
        <h1 className='text-xl font-semibold mb-2'>
          Leave Log
        </h1>
        <div className='flex flex-wrap flex-col w-[100%]'>
          <table className='table-fixed'>
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
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{val.username}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{val.leaveType}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{val.from}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{val.to}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{val.numberOfDays}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{val.status}</td>
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
