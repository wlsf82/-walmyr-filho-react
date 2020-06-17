import React from "react";

const ThinBanner = () => (
  <div style={{
      padding: '10px 10px 30px 10px',
      letterSpacing: '0.8px'
    }}>
    <span>Os curso da Escola TAT também estão disponíveis no </span>
    <a
      href="https://udemy.com/user/walmyr"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'underline', fontWeight: 'bold' }}
    >
      Udemy
    </a>
  </div>
);
  

export default ThinBanner;
