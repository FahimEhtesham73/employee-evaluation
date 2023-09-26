import { useState, useEffect } from 'react';
import axios from 'axios';

const AddEmployeeRecommendation = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [isRecommendedForIncrement, setIsRecommendedForIncrement] = useState(false);
  const [isRecommendedForPromotion, setIsRecommendedForPromotion] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of employee names from your API endpoint
    axios.get('http://localhost:8080/api/v1/employee/employee-names')
      .then((response) => {
        const names = response.data.map((user) => user);
        setEmployeeList(names);
      })
      .catch((error) => {
        console.error('Error fetching employee names:', error);
        setError('Error fetching employee names.');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new employee recommendation
    axios.post('http://localhost:8080/api/v1/employee/employee-recommendation', {
      employeeName,
      isRecommendedForIncrement,
      isRecommendedForPromotion,
    })
      .then(() => {
        // Handle success, update the employee list
        setEmployeeList([...employeeList, employeeName]);

        // Clear the form fields
        setEmployeeName('');
        setIsRecommendedForIncrement(false);
        setIsRecommendedForPromotion(false);
      })
      .catch((error) => {
        console.error('Error adding employee recommendation:', error);
        setError('Error adding employee recommendation.');
      });
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    background: '#f9f9f9',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#007bff',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '10px',
    fontSize: '16px',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const checkboxLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
  };

  const checkboxStyle = {
    marginRight: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Add Employee Recommendation</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={labelStyle}>
          <label>
            Employee Name:
            <select
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
              style={selectStyle}
            >
              <option value="" disabled>Select an employee</option>
              {employeeList.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div style={checkboxLabelStyle}>
          <label style={checkboxStyle}>
            Recommend for Increment:
            <input
              type="checkbox"
              checked={isRecommendedForIncrement}
              onChange={(e) => setIsRecommendedForIncrement(e.target.checked)}
            />
          </label>
        </div>
        <div style={checkboxLabelStyle}>
          <label style={checkboxStyle}>
            Recommend for Promotion:
            <input
              type="checkbox"
              checked={isRecommendedForPromotion}
              onChange={(e) => setIsRecommendedForPromotion(e.target.checked)}
            />
          </label>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default AddEmployeeRecommendation;
