import { useEffect } from "react";
import useFindProgresdById from "../hooks/useFindProgress";
import useCreateProgress from "../hooks/useAddProgress";

function ShowProgress() {
  const { id, name } = JSON.parse(localStorage.getItem("data"));

  const { data, isLoading, error } = useFindProgresdById(id);
  const { success } = useCreateProgress();

  useEffect(() => {}, [success]);

  if (isLoading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={styles.error}>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {data && (
        <div>
          <h1 style={styles.heading}>Project Table</h1>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Project Name</th>
                <th style={styles.tableHeader}>Project Contribution</th>
                <th style={styles.tableHeader}>Progress Percentage</th>
                <th style={styles.tableHeader}>Employee Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((project, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.tableData}>{project.projectName}</td>
                  <td style={styles.tableData}>{project.projectContribution}</td>
                  <td style={styles.tableData}>{project.progressPercentage}%</td>
                  <td style={styles.tableData}>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  loading: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "20px",
    textAlign: "center",
  },
  error: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "20px",
    color: "red",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px",
    textAlign: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px",
  },
  tableHeader: {
    backgroundColor: "#000080",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  tableRow: {
    borderBottom: "1px solid #ccc",
  },
  tableData: {
    padding: "10px",
  },
};

export default ShowProgress;
