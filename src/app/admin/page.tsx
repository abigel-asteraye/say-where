"use client";

import { useState } from "react";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState<number | "">("");
  const [longitude, setLongitude] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState<number | "">("");
  const [tags, setTags] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "failure" | "">("");

  const availableTags = ["study", "dining", "outdoor", "events", "essentials", "gems"] as const

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setStatus("");

    const payload= {
      name,
          location: { latitude, longitude },
          description,
          type,
          rating,
          tags,
    };

    console.log("Submitting payload:", payload); 
    try {
      const response = await fetch("/api/spots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Spot added successfully!");
        setStatus("success");
        setName("");
        setLatitude("");
        setLongitude("");
        setDescription("");
        setType("");
        setRating("");
        setTags([]);
      } else {
        setMessage("Failed to add spot.");
        setStatus("failure");
      }
    } catch (error) {
      console.error("Error adding spot:", error);
      setMessage("An error occurred.");
      setStatus("failure");
    }
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Handling tags")
    const selectedTags = Array.from(e.target.selectedOptions, (option) => option.value);
    console.log("Selected Tags:", selectedTags);
    setTags(selectedTags);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#fdf1e4] to-[#f5deb3]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">

        {status === "success" && (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-green-600 mb-4">Success!</h1>
            <p className="text-gray-700 mb-6">{message}</p>
            <button
              onClick={() => setStatus("")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add Another Spot
            </button>
          </div>
        )}

        {status === "failure" && (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-700 mb-6">{message}</p>
            <button
              onClick={() => setStatus("")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {status === "" && (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Admin - Add New Spot</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                <input
                  type="number"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value === "" ? "" : parseFloat(e.target.value))}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                <input
                  type="number"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value === "" ? "" : parseFloat(e.target.value))}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                </input>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value === "" ? "" : parseFloat(e.target.value))}
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                <select
                  multiple
                  value={tags}
                  onChange={handleTagChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                  {availableTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-1">Hold Ctrl (or Cmd on Mac) to select multiple tags.</p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Add Spot
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPage;