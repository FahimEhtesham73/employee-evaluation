import { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendedEmployeesTable = () => {
  const [recommendedEmployees, setRecommendedEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch recommended employees from your API endpoint
    axios
      .get('http://localhost:8080/api/v1/employee/recommended-employee')
      .then((response) => {
        setRecommendedEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recommended employees:', error);
        setError('Error fetching recommended employees.');
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
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Recommended Employees</h2>
      {error && <p className="error">{error}</p>}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Employee Name</th>
            <th style={tableHeaderStyle}>Recommended for Increment</th>
            <th style={tableHeaderStyle}>Recommended for Promotion</th>
          </tr>
        </thead>
        <tbody>
          {recommendedEmployees.map((employee) => (
            <tr key={employee._id}>
              <td style={tableCellStyle}>{employee.employeeName}</td>
              <td style={tableCellStyle}>
                {employee.isRecommendedForIncrement ? 'Yes' : 'No'}
              </td>
              <td style={tableCellStyle}>
                {employee.isRecommendedForPromotion ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendedEmployeesTable;
