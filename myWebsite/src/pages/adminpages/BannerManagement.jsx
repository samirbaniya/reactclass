import React, { useState } from "react";

function BannerManagement() {
  const [banners, setBanners] = useState([]);
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
      const newBanner = {
        id: Date.now(),
        image: preview,
      };
      setBanners([...banners, newBanner]); // Add to state (Replace with API call for backend)
      setSelectedFile(null);
      setPreview("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
        Manage Banners
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
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
            <button
              onClick={handleUpload}
              className="mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Upload Banner
            </button>
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-600 mb-3">
          Uploaded Banners
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {banners.map((banner) => (
            <div key={banner.id} className="border rounded-lg p-2 shadow-sm">
              <img
                src={banner.image}
                alt="Banner"
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerManagement;
