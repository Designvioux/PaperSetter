import React, { useMemo } from 'react';
import './Components/StudentProfile.css';

const StudentProfile = () => {
  // Auto-generate a consistent Student ID (only once)
  const studentId = useMemo(() => `STU${Date.now()}`, []);

  // Static exam data with auto-generated unique Exam IDs
  const examData = useMemo(() => {
    const baseTimestamp = Date.now(); // base to avoid repeated Date.now() usage
    const data = [
      { type: 'Unit Test', date: '01/04/2025', subject: 'English', questions: 20, marks: 20, status: 'Pass' },
      { type: 'Unit Test', date: '18/04/2025', subject: 'Maths', questions: 20, marks: 19, status: 'Fail' },
      { type: 'Unit Test', date: '20/04/2025', subject: 'Marathi', questions: 20, marks: 20, status: 'Pass' },
      { type: 'Unit Test', date: '25/04/2025', subject: 'Maths', questions: 20, marks: 20, status: 'Pass' },
    ];

    return data.map((exam, index) => ({
      id: `EXAM${baseTimestamp + index}`, // unique exam ID
      ...exam,
    }));
  }, []);

  return (
    <div className="container">
      {/* Personal Info Card */}
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
              <p className="student-id"><strong>Student ID:</strong> {studentId}</p>
            </div>
          </div>
          <div className="info-section">
            <div className="info-grid">
              <p><strong>Full Name :</strong> Rakesh Chandrakant Nikam</p>
              <p><strong>School Name :</strong> Vikas High-School, Vikhroli</p>
              <p><strong>Gender :</strong> Male</p>
              <p><strong>District :</strong> Satara</p>
              <p><strong>Village :</strong> Vikhroli</p>
              <p><strong>Tahsil :</strong> Koregaon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Info Card */}
      <div className="card">
        <h3>Exam Details</h3>
        <table className="exam-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Exam ID</th>
              <th>Exam Type</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Questions</th>
              <th>Marks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {examData.map((exam, index) => (
              <tr key={exam.id}>
                <td>{index + 1}</td>
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
