import React from 'react';


const Footer = () => {
  const footerStyle = {
    background: 'url("https://i.pinimg.com/originals/11/56/71/115671a1a70292994ba9ed0e000dfc27.gif")',
    backgroundSize: 'cover',
    backgroundPosition: 'center 20px', // Center the background
    fontFamily: 'Space Mono, monospace', // Set Space Mono font
    paddingTop: '3rem',
    paddingBottom: '3rem',
    color: 'white',
  };

  const textStyle = {
    color: 'red',
    fontFamily: 'Cousine, monospace',
  };

  return (
    <footer style={footerStyle} className='text-center'>
      <div className='container'>
        {/* Company Name in the Right Corner */}
        <div className='row'>
          <div className='col'>
            <h2 style={{ marginBottom: '20px', color: 'white', fontFamily: 'Cousine, monospace' }}>
              #<span style={{ color: 'red' }}>Var</span>iable_
            </h2>
          </div>
        </div>

        {/* Three Sections Below */}
        <div className='row'>
          <div className='col'>
            <h4 style={{ ...textStyle }}>Company</h4>
            <p style={{ ...textStyle }}>About</p>
            <p style={{ ...textStyle }}>Contact</p>
          </div>

          <div className='col'>
            <h4 style={{ ...textStyle }}>Legal</h4>
            <p style={{ ...textStyle }}>Claim</p>
            <p style={{ ...textStyle }}>Terms</p>
          </div>

          <div className='col'>
            <h4 style={{ ...textStyle }}>Socials</h4>
            <p style={{ ...textStyle }}>Instagram</p>
            <p style={{ ...textStyle }}>LinkedIn</p>
          </div>
        </div>

        {/* Copyright and Icons */}
        <div className='row'>
          <div className='col'>
            <p>&copy; 2024 <span style={{ color: 'red' }}>Var</span>iable. All rights reserved.</p>
            <p>Made by Team-10 CDAC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;