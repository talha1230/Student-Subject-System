import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

function StudentDashboard() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ firstName: '', email: '', lastName:'' });
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

  const handleDeleteStudent = (studentId) => {
    fetch(`http://localhost:8080/students/${studentId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete student');
        }
        setStudents(students.filter(student => student.studentId !== studentId));
      })
      .catch(error => console.error('Delete error:', error));
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
                <li key={student.studentId}>
                  {student.email} - {student.firstName} - {student.lastName}
                  <button onClick={() => handleDeleteStudent(student.studentId)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <h2>Add Student</h2>
      <input
        type="text"
        name="firstName"
        value={newStudent.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={newStudent.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />  
      <input
        type="email"
        name="email"
        value={newStudent.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default StudentDashboard;