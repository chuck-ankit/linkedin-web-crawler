import React from "react";

const ProfileTable = ({ profiles }) => {
  if (!profiles.length) {
    return null;
  }

  return (
    <div className="mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Crawled Profiles</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">URL</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{profile.name || "N/A"}</td>
              <td className="border px-4 py-2">{profile.title || "N/A"}</td>
              <td className="border px-4 py-2">{profile.location || "N/A"}</td>
              <td className="border px-4 py-2">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Profile Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTable;
