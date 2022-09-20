import React, { useState, useEffect } from 'react';

import { useHistory, useParams } from 'react-router-dom';

import { db } from '../../firebase-config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  // on submit

  const onSubmit = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, 'users', id);
    const newFields = {
      FirstName,
      LastName,
      EmployeeId,
      JobTitle,
      Salary,
      email,
      DateOfBirth,
      City,
      Skills,
    };
    await updateDoc(userDoc, newFields);

    history.push('/');
  };

  // get single document
  const docRef = doc(db, 'users', id);

  const loadUser = async () => {
    const res = await getDoc(docRef);
    const data = res.data();
    // console.log(data);
    setUser(data);
  };

  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Edit A User</h2>
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
          <button
            className='btn btn-warning btn-block'
            onClick={() => {
              onSubmit(id);
            }}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
