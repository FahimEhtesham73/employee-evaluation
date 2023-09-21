const AdminDashboard = () => {
  const dashboardStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center'
  };

  const headingStyle = {
    color: 'blue'
  };

  return (
    <div style={dashboardStyle}>
      <h1 style={headingStyle}>Admin Dashboard</h1>
    </div>
  );
};

export default AdminDashboard;
