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
    <div style={styles.container}>
      <h1 style={styles.heading}>Create Progress Entry</h1>
      {success && <p style={styles.success}>Progress entry created successfully!</p>}
      {isLoading && <p style={styles.loading}>Creating progress entry...</p>}
      {!success && !isLoading && (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="projectName">
              Project Name:
            </label>
            <input
              style={styles.input}
              type="text"
              id="projectName"
              name="projectName"
              value={newEntry.projectName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="projectContribution">
              Project Contribution:
            </label>
            <input
              style={styles.input}
              type="text"
              id="projectContribution"
              name="projectContribution"
              value={newEntry.projectContribution}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="progressPercentage">
              Progress Percentage:
            </label>
            <input
              style={styles.input}
              type="number"
              id="progressPercentage"
              name="progressPercentage"
              value={newEntry.progressPercentage}
              onChange={handleInputChange}
              required
            />
          </div>

          <button style={styles.button} type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Progress Entry"}
          </button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  success: {
    color: "green",
    margin: "10px 0",
  },
  loading: {
    color: "blue",
    margin: "10px 0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default CreateProgressComponent;
