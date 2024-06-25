import React, { useState } from 'react';
import './ordering1.css';
import { VscAccount } from 'react-icons/vsc';
import { FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Ordering1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/saveFormData', formData);
      console.log(response.data); // Pesan dari backend (contoh: 'Data berhasil disimpan')
      // Tambahkan logika redirect atau tindakan setelah sukses menyimpan data
    } catch (error) {
      console.error('Gagal menyimpan data:', error);
    }
  };

  return (
    <div className="customer-container">
      <h1>Become a Customer</h1>
      {/* Form components */}
      <div className="customer-app">
        <div className="customer-box-container">
          <div className="customer-box-services">
            <div className="customer-detail-container">
              <div className="customer-detail">
                <h3 className="customer-h3">Name</h3>
                <div className="customer-box-mini">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Carter"
                    className="input-field"
                  />
                  <VscAccount className="icon" />
                </div>
              </div>
              <div className="customer-detail">
                <h3 className="customer-h3">Email</h3>
                <div className="customer-box-mini">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className="input-field"
                  />
                  <MdEmail className="icon" />
                </div>
              </div>
              <div className="customer-detail">
                <h3 className="customer-h3">Phone Number</h3>
                <div className="customer-box-mini">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+62"
                    className="input-field"
                    pattern="^\+62[0-9]*$"
                  />
                  <FaMobileAlt className="icon" />
                </div>
              </div>
              <div className="customer-detail">
                <h3 className="customer-h3">Company</h3>
                <div className="customer-box-mini">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="input-field"
                  />
                  <FaBuilding className="icon" />
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/ordering2" onClick={handleSubmit} className="next-button-clik">
            Next Step
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Ordering1;