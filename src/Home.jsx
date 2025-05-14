import React, { useState } from "react";
import { FaSearch, FaHeart, FaChevronDown } from "react-icons/fa";
import "./home.css";
import logo from './assets/logo.png';

const Home = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <div className="home-container">
      <div className="header">
              <img src={logo} alt="LibroNet Logo" className="logo" />
      </div>
      <nav className="navbar">
        <div className="nav-links">
          <span>My Books</span>
          <span>Category <FaChevronDown /></span>
          <span>Language <FaChevronDown /></span>
        </div>
        <div className="search-profile">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <div className="profile" onClick={toggleProfile}>
            <img 
              src="User_Pro.jpg" 
              alt="Profile" 
              className="profile-pic" 
            />
            {profileOpen && (
              <div className="dropdown">
                <div>Profile</div>
                <div>Dashboard</div>
                <div>Logout</div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="books-grid">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="book-card">
            {index < 6 ? (
              <>
                <div className="book-cover">
                  <img 
                    src="Loveena.jpg" 
                    alt="Book Cover" 
                  />
                  <FaHeart className="heart-icon" />
                </div>
                <div className="book-details">
                  <h4>{index % 2 === 0 ? 'Madolduwa (මඩොල්දූව)' : 'Loveena (ලොවීනා)'}</h4>
                  <p>
                    {index % 2 === 0 ? 'Martin Wickramasinghe' : 'Mohan Raj Madawala'}
                  </p>
                  <span>Novel</span>
                </div>
              </>
            ) : (
              <>
                <div className="book-cover">
                  <img 
                    src="MadolDoova.jpg" 
                    alt="Book Cover" 
                  />
                  <FaHeart className="heart-icon" />
                </div>
                <div className="book-details">
                  <h4>Madolduwa (මඩොල්දූව)</h4>
                  <p>Martin Wickramasinghe</p>
                  <span>Novel</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
