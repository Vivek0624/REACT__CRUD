import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUser] = useState([]);

  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUser(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    loadUsers();
  };

  return (
    <div className='container-fluid'>
      <div className='py-4'>
        <h1>Home Page</h1>
        <table className='table border shadow'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>FirstName</th>
              <th scope='col'>LastName</th>
              <th scope='col'>EmployeeId</th>
              <th scope='col'>JobTitle</th>
              <th scope='col'>Salary</th>
              <th scope='col'>Email</th>
              <th scope='col'>DateOfBirth</th>
              <th scope='col'>City</th>
              <th scope='col'>Skills</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index, key) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.EmployeeId}</td>
                <td>{user.JobTitle}</td>
                <td>{user.Salary}</td>
                <td>{user.email}</td>
                <td>{user.DateOfBirth}</td>
                <td>{user.City}</td>
                <td>{user.Skills}</td>
                <td>
                  <Link
                    className='btn btn-outline-primary mr-2'
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className='btn btn-danger'
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
