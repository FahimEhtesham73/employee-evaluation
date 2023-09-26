import { useState } from "react";
import useCreateProgress from "../hooks/useAddProgress";

function CreateProgressComponent() {
  const { isLoading, success, createProgressEntry } = useCreateProgress();
  const { id } = JSON.parse(localStorage.getItem("data"));

  const [newEntry, setNewEntry] = useState({
    projectName: "",
    projectContribution: "",
    progressPercentage: 0,
    user: id, // Provide a user ID
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProgressEntry(newEntry);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Create Progress Entry</h1>
      {success && (
        <p style={successMessageStyle}>Progress entry created successfully!</p>
      )}
      {isLoading && <p>Loading...</p>}
      {!success && !isLoading && (
        <form onSubmit={handleSubmit} style={formStyle}>
          <div className="form-group" style={inputGroupStyle}>
            <label htmlFor="projectName" style={labelStyle}>
              Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={newEntry.projectName}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
          </div>
          <div className="form-group" style={inputGroupStyle}>
            <label htmlFor="projectContribution" style={labelStyle}>
              Project Contribution:
            </label>
            <input
              type="text"
              id="projectContribution"
              name="projectContribution"
              value={newEntry.projectContribution}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
          </div>
          <div className="form-group" style={inputGroupStyle}>
            <label htmlFor="progressPercentage" style={labelStyle}>
              Progress Percentage:
            </label>
            <input
              type="number"
              id="progressPercentage"
              name="progressPercentage"
              value={newEntry.progressPercentage}
              onChange={handleInputChange}
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" disabled={isLoading} style={submitButtonStyle}>
            {isLoading ? "Creating..." : "Create Progress Entry"}
          </button>
        </form>
      )}
    </div>
  );
}

// Define styles as JavaScript objects
const containerStyle = {
  textAlign: "center",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
};

const headerStyle = {
  fontSize: "24px",
  marginBottom: "20px",
  color: "#333",
};

const successMessageStyle = {
  color: "green",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputGroupStyle = {
  marginBottom: "10px",
  width: "100%",
};

const labelStyle = {
  fontSize: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const submitButtonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default CreateProgressComponent;

