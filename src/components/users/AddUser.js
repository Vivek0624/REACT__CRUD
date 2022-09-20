import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

const AddUser = () => {
  const usersCollectionRef = collection(db, 'users');
  let history = useHistory();
  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    EmployeeId: '',
    JobTitle: '',
    Salary: '',
    email: '',
    DateOfBirth: '',
    City: '',
    Skills: '',
  });

  const {
    FirstName,
    LastName,
    EmployeeId,
    JobTitle,
    Salary,
    email,
    DateOfBirth,
    City,
    Skills,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addDoc(usersCollectionRef, user);
    history.push('/');
  };
  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your FirstName'
              name='FirstName'
              value={FirstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your LastName'
              name='LastName'
              value={LastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Employee Id'
              name='EmployeeId'
              value={EmployeeId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Job Title'
              name='JobTitle'
              value={JobTitle}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Salary'
              name='Salary'
              value={Salary}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Email'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your DateOfBirth'
              name='DateOfBirth'
              value={DateOfBirth}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your City'
              name='City'
              value={City}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Skills'
              name='Skills'
              value={Skills}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className='btn btn-primary btn-block'>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
