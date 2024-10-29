'use client';
import bannerimg from '../../../public/Images/kettlebell-fitness-still-life.jpg'
import { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    country: '',
    gender: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side (Sign Up form) */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#DC5C00' }}>Join the Waiting List</h1>
          <p className="text-gray-500 mb-8">Don’t miss out! Get exclusive early access by joining our waiting list!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-700"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-700"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country</label>
              <input
                type="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-700"
                placeholder="Country"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border-2 border-gray-300 rounded-lg p-3 text-gray-400"
              >
                <option value="Male" className="block text-gray-700">Male</option>
                <option value="Female" className="block text-gray-700">Female</option>
                <option value="Other" className="block text-gray-700">Other</option>
              </select>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition">Sign Up</button>
          </form>
        </div>
      </div>

      {/* Right side (image) */}
      <div className="w-full md:w-1/2">
        <img src="https://img.freepik.com/free-photo/kettlebell-fitness-still-life_23-2151739177.jpg?t=st=1728323227~exp=1728326827~hmac=611e9d45d5653152bab27fa61d9c71bd5ed3b26d0ad5fbad07fcc327333314b0&w=740" alt="Signup illustration" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default SignUpForm;


