import React from 'react';

function How() {
  return (
    <div style={{ padding: '20px', color: '#333' }}>
      <h1 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '20px' }}>How it Works</h1>
      <p style={{ marginBottom: '20px' }}>Follow these steps to start practicing for your mock interview:</p>
      
      <ol style={{ lineHeight: '1.6', paddingLeft: '20px' }}>
        <li style={{ marginTop: '10px' }}>
          <strong>Login:</strong> First, log in to your account. If you don’t have an account yet, you’ll need to sign up.
        </li>
        <li style={{ marginTop: '10px' }}>
          <strong>Create a New Interview:</strong> Click on the "<strong>+ Add New</strong>" button on the Dashboard to set up a new mock interview.
        </li>
        <li style={{ marginTop: '10px' }}>
          <strong>Enter Job Details:</strong> Provide the <em>Job Title</em>, <em>Job Description</em>, and <em>Years of Experience</em> for the role you’re preparing for. Our AI will use this information to generate relevant interview questions.
        </li>
        <li style={{ marginTop: '10px' }}>
          <strong>Start the Interview:</strong> Once your interview is set up, click "<strong>Start</strong>" to begin.
        </li>
        <li style={{ marginTop: '10px' }}>
          <strong>Record Answers:</strong> You’ll see a question displayed on the screen. Click the "<strong>Record</strong>" button to start recording your answer. You can use your webcam or just audio, depending on your preference.
        </li>
        <li style={{ marginTop: '10px' }}>
          <strong>Receive Feedback:</strong> After recording each answer, our AI will provide feedback on your response. You can review this feedback to improve your skills.
        </li>
        <li style={{ marginTop: '10px' }}>
          <strong>Review Past Interviews:</strong> On the Dashboard, you can see a list of previous mock interviews. Click "<strong>Feedback</strong>" to review feedback for each session or "<strong>Start</strong>" to retake the interview.
        </li>
      </ol>
      
      <p style={{ marginTop: '20px' }}>
        That’s it! Start practicing, improve your responses, and get ready for the real interview with confidence.
      </p>
    </div>
  );
}

export default How;
