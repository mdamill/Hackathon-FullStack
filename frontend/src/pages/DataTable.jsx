import React from 'react';

function DataTable({ user, logout }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">User Details</h2>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {!user ? (
          <p className="text-red-600 text-lg text-center">Please login to view user data</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-200 rounded">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">First Name</th>
                  <th className="px-4 py-2 border">Last Name</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-700">
                <tr>
                  <td className="px-4 py-2 border">{user.id}</td>
                  <td className="px-4 py-2 border">{user.firstname}</td>
                  <td className="px-4 py-2 border">{user.lastname}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataTable;
