import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import profile from "../images/profile.png";
import Pagination from "./Pagination";
import axios from "axios";
import { MdMessage } from "react-icons/md";
import { toast } from "react-toastify";


const AdminHome = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhIiwicm9sZSI6InR5cGUtSSIsImlhdCI6MTcyMzI4MTM0NiwiZXhwIjoxNzIzODg2MTQ2fQ.FBhiP7LcHsi4aca7nVpjnupwruTvaVc9SX6QJoGCOPQ"; // Replace with your token
  const headers = [
    "Name",
    "Employee-Type",
    "Leave-Type",
    "From",
    "To",
    "Days",
    "Reason",
    "Action",
  ];

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReason, setSelectedReason] = useState(null);
  const rowsPerPage = 6; // Adjust as needed
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.post('http://localhost:5000/leave/approve',
        { id },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        toast.success('Leave request approved successfully!');
      } else {
        toast.error('Failed to approve leave request.');
      }

      getData();
    } catch (error) {
      console.error('Error accepting leave:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.post('http://localhost:5000/leave/deny',
        { id },
        { headers: { 'Content-Type': 'application/json' } }
      );
      if (response.status === 200) {
        toast.success('Leave request declined successfully!');
      } else {
        toast.error('Failed to decline leave request.');
      }

      getData();
    } catch (error) {
      console.error('Error rejecting leave:', error);
    }
  };

  const handleReasonClick = (reason) => {
    setSelectedReason(reason);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/leave/getLeaves', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const filteredData = response.data.data.filter(record => record.status === 'Pending');
      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const dataToDisplay = data.slice(startIndex, endIndex);

  return (
    <div className="flex w-screen h-screen">
      <Nav />
      <main className="flex flex-col pl-5 pr-5 pt-2 w-screen h-screen">
        <div className="w-full flex justify-between h-12 mb-5 items-center pl-5 pr-5 bg-slate-100 border-slate-950 rounded-lg">
          <h2 className="font-semibold text-xl">Dashboard</h2>
          <div>
            <img src={profile} alt="profile" width={40} height={40} />
          </div>
        </div>

        <div className="w-full h-full">
          <div className="w-full flex flex-col p-3 bg-slate-100 mb-5 border-slate-950 rounded-lg">
            <h2 className="font-semibold text-xl mb-3">Leaves</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#E7FBE6] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Total Leaves <br className="md:hidden" /> Requested
                </h2>
              </div>

              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#D1E9F6] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Total Leaves <br className="md:hidden" /> Approved
                </h2>
              </div>

              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#eed2ec] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Total Leaves <br className="md:hidden" /> Rejected
                </h2>
              </div>

              <div className="flex-1 min-w-[200px] md:min-w-[150px] lg:w-1/2 xl:w-1/4 h-auto rounded-lg bg-[#FFE0B5] flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <h2 className="font-semibold text-2xl md:text-3xl">28</h2>
                <h2 className="font-semibold text-lg md:text-xl text-center">
                  Percentage of Leave <br className="md:hidden" /> Today
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full h-auto bg-slate-100 p-3 border-slate-950 rounded-lg">
            <div className="w-full overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-left font-bold text-sm text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dataToDisplay.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">{row.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">{row.empType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">{row.leaveType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">{row.from}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">{row.to}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">{row.numberOfDays}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900 cursor-pointer" onClick={() => handleReasonClick(row.reason)}><MdMessage /></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex flex-row gap-4">
                        <button className="text-green-500 hover:text-green-700 text-2xl" onClick={() => handleAccept(row._id)}>☑</button>
                        <button className="text-red-500 hover:text-red-700 text-2xl" onClick={() => handleReject(row._id)}>☒</button>
                      </td>
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

        {/* Modal for displaying reason */}
        {selectedReason && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-4">Leave Reason</h2>
              <p>{selectedReason}</p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setSelectedReason(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminHome;
