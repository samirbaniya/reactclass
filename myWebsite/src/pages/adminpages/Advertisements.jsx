import React, { useEffect, useState } from "react";

function Advertisements() {
  const [ads, setAds] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Show preview
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newAd = {
        id: Date.now(),
        image: preview,
      };
      setAds([...ads, newAd]); // Add to state (Replace with API call for backend)
      setSelectedFile(null);
      setPreview("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
        Manage Advertisements
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded-md w-full cursor-pointer"
        />

        {preview && (
          <div className="text-center">
            <img
              src={preview}
              alt="Preview"
              className="w-48 mx-auto rounded-md shadow-md"
            />
            <button
              onClick={handleUpload}
              className="mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Upload Ad
            </button>
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-600 mb-3">
          Uploaded Ads
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {ads.map((ad) => (
            <div key={ad.id} className="border rounded-lg p-2 shadow-sm">
              <img src={ad.image} alt="Ad" className="w-full rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advertisements;
