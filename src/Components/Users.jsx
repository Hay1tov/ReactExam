import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/users');
        setUsers(res.data.users);
        console.log(res.data.users);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='p-4 pt-20'>
      {error && <p className='text-red-500'>{error}</p>}

      {users.map(user => (
        <div key={user.id} className="flex items-center gap-6 mb-4 shadow-lg hover:scale-101 border border-gray-200 transition-[500ms] p-3 rounded">

          <img
            src={user.image}
            alt={user.firstName}
            className="w-20 h-20 rounded-full object-cover outline-2 outline-sky-200 p-1 "
          />

          <div className='flex items-center gap-10'>
            <div>
              <h2 className='font-bold text-lg'>{user.firstName}</h2>
              <h2 className='font-bold text-lg'>{user.lastName}</h2>
            </div>
            <div>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Users;
