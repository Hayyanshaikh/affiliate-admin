// LoginHistory.jsx
import React, { useState } from 'react';
import Button from '../../../components/comman/Button.jsx';

const LoginHistory = () => {
  const [loginHistory, setLoginHistory] = useState([
    { date: '2023-01-01', time: '12:30 PM', device: 'Chrome' },
    { date: '2023-01-02', time: '10:45 AM', device: 'Firefox' },
    // Add more dummy data as needed
  ]);

  const handleAction = (index) => {
    // Add your action logic here
    console.log(`Action clicked for index ${index}`);
  };

  return (
    <div className="login_history profile_item">
      <div className="login_history_head profile_head">
        <h2 className="sub_heading">login history</h2>
        <small>Your Recent Logins</small>
      </div>
      <div className="table_responsive">
          <table className="login_history_table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Date</th>
                <th>Time</th>
                <th>Device</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loginHistory.map((login, index) => (
                <tr key={index} className="login_history_item">
                  <td>{index < 9 ? `0${index + 1}` : index + 1}</td>
                  <td>{login.date}</td>
                  <td>{login.time}</td>
                  <td>{login.device}</td>
                  <td>
                    <Button
                      className="login_history_action_button"
                      onClick={() => handleAction(index)}
                    >
                      Action
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default LoginHistory;
