import { useState } from "react";
import CoverageMap from "../Coverage/CoverageMap";

import { useLoaderData } from "react-router";


const Coverage = () => {
  const coverageData = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);


 

  const handleSearch = () => {
    const found = coverageData.find(
      item =>
        item.district.toLowerCase().includes(searchText.toLowerCase())
    );

    if (found) {
      setSelectedDistrict(found);
    } else {
      alert("District not found");
    }
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">
        We are available in 64 districts
      </h1>

      {/* 🔍 Search box */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search district (e.g. Dhaka)"
          className="input input-bordered w-full max-w-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="btn bg-lime-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* 🗺️ Map */}
      <CoverageMap
        coverageData={coverageData}
        selectedDistrict={selectedDistrict}
       />
    </div>
  );
};

export default Coverage;
