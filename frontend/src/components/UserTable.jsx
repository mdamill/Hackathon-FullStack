import React from 'react';

function UserTable({ user }) {
  if (!user) return null;

  return (
    <div className="mt-20 mb-20 max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl border border-gray-300 p-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-4">👤 User Details</h2>
      <div className="divide-y divide-gray-200">
        <UserRow label="First Name" value={user.firstname} />
        <UserRow label="Last Name" value={user.lastname} />
        <UserRow label="Address" value={user.address} />
        <UserRow label="Phone" value={user.ph} />
        <UserRow label="Email" value={user.email} />
      </div>
    </div>
  );
}

function UserRow({ label, value }) {
  return (
    <div className="py-5 flex justify-between items-center text-gray-800 text-lg">
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="text-right">{value}</span>
    </div>
  );
}

export default UserTable;
