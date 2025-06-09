import React from 'react';
import './Components/StudentProfile.css';

const StudentProfile = () => {
  const examData = [
    { id: 1, type: 'Unit Test', date: '01/04/2025', subject: 'English', questions: 20, marks: 20, status: 'Pass' },
    { id: 2, type: 'Unit Test', date: '18/04/2025', subject: 'Maths', questions: 20, marks: 19, status: 'Fail' },
    { id: 3, type: 'Unit Test', date: '20/04/2025', subject: 'Marathi', questions: 20, marks: 20, status: 'Pass' },
    { id: 4, type: 'Unit Test', date: '25/04/2025', subject: 'Maths', questions: 20, marks: 20, status: 'Pass' },
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/logo192.png" alt="logo" className="logo" />
          <h1 className="title">Paper Setter</h1>
        </div>
        <div className="profile">
          <span className="name">Rakesh Nikam</span>
          <img src="/profile.jpg" alt="profile" className="profile-img" />
        </div>
      </header>

      <div className="card">
        <div className="card-header">
          <h3>Personal Details</h3>
          <button className="edit-btn">Edit</button>
        </div>
        <div className="profile-body">
          <div className="left-section">
            <img src="/profile.jpg" alt="Profile" className="profile-picture" />
            <div>
              <p className="name-main">Rakesh Nikam</p>
              <p className="email">rakeshnikam@gmail.com</p>
            </div>
          </div>
          <div className="info-section">
            <div className="info-grid">
              <p><strong>Full Name :</strong> Rakesh Chandrakant Nikam</p>
              <p><strong>School Name :</strong> Vikas High-School, Vikhroli</p>
              <p><strong>Gender :</strong> Male</p>
              <p><strong>Cluster :</strong> Vikhroli</p>
              <p><strong>District :</strong> Satara</p>
              <p><strong>Village :</strong> Vikhroli</p>
              <p><strong>Tahsil :</strong> Koregaon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Exam Details</h3>
        <table className="exam-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Exam Type</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Questions</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td>{exam.type}</td>
                <td>{exam.date}</td>
                <td>{exam.subject}</td>
                <td>{exam.questions}</td>
                <td>{exam.marks}</td>
                <td>
                  <span className={`status ${exam.status === 'Pass' ? 'pass' : 'fail'}`}>
                    {exam.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfile;
