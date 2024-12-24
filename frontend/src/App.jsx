import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProfileTable from "./components/ProfileTable";
import axios from "axios";

const App = () => {
  const [urls, setUrls] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCrawl = async () => {
    setLoading(true);
    const profileUrls = urls.split("\n").map((url) => url.trim());
    try {
      const response = await axios.post("http://localhost:8000/crawl", {
        profiles: profileUrls,
      });
      setProfiles(response.data.profiles);
    } catch (error) {
      console.error("Error fetching profiles:", error);
      alert("Failed to fetch profiles. Check the console for more details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">LinkedIn Web Crawler</h1>
          <textarea
            className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter LinkedIn profile URLs, one per line"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
          ></textarea>
          <button
            onClick={handleCrawl}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Crawling..." : "Start Crawling"}
          </button>
        </div>
        <ProfileTable profiles={profiles} />
      </div>
    </div>
  );
};

export default App;
