import { useEffect } from "react";
import useFindProgresdById from "../hooks/useFindProgress";
import useCreateProgress from "../hooks/useAddProgress";

function ShowProgress() {
  const { id, name } = JSON.parse(localStorage.getItem("data"));

  const { data, isLoading, error } = useFindProgresdById(id);
  const { success } = useCreateProgress();
  console.log("success from showprogress", success);

  useEffect(() => {}, [success]);

  if (isLoading) {
    return <div style={loadingStyle}>Loading...</div>;
  }

  if (error) {
    return <div style={errorStyle}>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <div style={containerStyle}>
          <h1 style={headerStyle}>Project Table</h1>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Project Name</th>
                <th style={tableHeaderStyle}>Project Contribution</th>
                <th style={tableHeaderStyle}>Progress Percentage</th>
                <th style={tableHeaderStyle}>Employee Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((project, index) => (
                <tr key={index}>
                  <td style={tableCellStyle}>{project.projectName}</td>
                  <td style={tableCellStyle}>{project.projectContribution}</td>
                  <td style={tableCellStyle}>
                    {project.progressPercentage}%
                  </td>
                  <td style={tableCellStyle}>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Define styles as JavaScript objects
const loadingStyle = {
  textAlign: "center",
  fontSize: "20px",
  marginTop: "20px",
};

const errorStyle = {
  textAlign: "center",
  fontSize: "20px",
  color: "red",
  marginTop: "20px",
};

const containerStyle = {
  margin: "20px",
};

const headerStyle = {
  fontSize: "24px",
  marginBottom: "20px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const tableHeaderStyle = {
  background: "#007bff",
  color: "white",
  padding: "10px",
  textAlign: "left",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "10px",
};

export default ShowProgress;
