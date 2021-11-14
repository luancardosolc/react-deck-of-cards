import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/deck/new', { replace: true });
  }, [navigate]);
  
  return (
    <div>
      <p>Home</p>
    </div>
  );
}

export default Main;