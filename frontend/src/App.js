import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student List</h1>
        <ul>
          {students.map(student => (
            <li key={student.id}>{student.name} - {student.email}</li>
          ))}
        </ul>
        <h2>Add Student</h2>
        <input
          type="text"
          name="name"
          value={newStudent.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={newStudent.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </header>
    </div>
  );
}
export default App;