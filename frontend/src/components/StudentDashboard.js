import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ firstName: '', email: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };
  
  const handleAddStudent = () => {
    fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then(response => response.json())
      .then(data => setStudents([...students, data]))
      .catch(error => console.error('Fetch error:', error));
  };
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  return (
    <div className="container">
      <h1>Student Dashboard</h1>
      <button onClick={toggleModal}>View Students</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <ul>
              {students.map(student => (
                <li key={student.id}>{student.email} - {student.firstName}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <h2>Add Student</h2>
      <input
        type="text"
        name="firstName" // Updated to match backend entity
        value={newStudent.firstName} // Ensure this is correctly bound to the state
        onChange={handleInputChange} // Ensure this function updates the state correctly
        placeholder="First Name"
      />
      <input
        type="email"
        name="email" // Ensure this matches the state property
        value={newStudent.email} // Ensure this is correctly bound to the state
        onChange={handleInputChange} // Ensure this function updates the state correctly
        placeholder="Email"
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default StudentDashboard;