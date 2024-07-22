import React from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [users, setUsers] = React.useState([]);
  const [apiKey, setApiKey] = React.useState('');

  React.useEffect(() => {
    axios.get('/api/admin/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));

    axios.get('/api/admin/settings')
      .then(response => setApiKey(response.data.apiKey))
      .catch(error => console.error(error));
  }, []);

  const updateApiKey = () => {
    axios.post('/api/admin/settings', { apiKey })
      .then(response => console.log('API key updated'))
      .catch(error => console.error(error));
  };

  const blockUser = (userId) => {
    axios.post('/api/admin/block', { id: userId })
      .then(response => setUsers(users.map(user => user.id === userId ? { ...user, blocked: true } : user)))
      .catch(error => console.error(error));
  };
  

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <h2>Settings</h2>
        <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        <button onClick={updateApiKey}>Update API Key</button>
      </div>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.telegramId} - {user.blocked ? 'Blocked' : 'Active'}
              {!user.blocked && <button onClick={() => blockUser(user.id)}>Block</button>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
