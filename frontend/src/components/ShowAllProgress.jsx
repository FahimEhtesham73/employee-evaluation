import { useState, useEffect } from 'react';
import axios from 'axios';

const AllProgress = () => {
  const [progressList, setProgressList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all progress entries from your API endpoint
    axios.get('http://localhost:8080/api/v1/employee/all-progress')
      .then((response) => {
        setProgressList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching progress entries:', error);
        setError('Error fetching progress entries.');
      });
  }, []);

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#007bff',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const tableHeaderStyle = {
    background: '#007bff',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  };

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>All Progress Entries</h2>
      {error && <p className="error">{error}</p>}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Project Name</th>
            <th style={tableHeaderStyle}>Project Contribution</th>
            <th style={tableHeaderStyle}>Progress Percentage</th>
            <th style={tableHeaderStyle}>User</th>
          </tr>
        </thead>
        <tbody>
          {progressList.map((progress) => (
            <tr key={progress._id}>
              <td style={tableCellStyle}>{progress.projectName}</td>
              <td style={tableCellStyle}>{progress.projectContribution}</td>
              <td style={tableCellStyle}>{progress.progressPercentage}</td>
              <td style={tableCellStyle}>{progress.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProgress;
