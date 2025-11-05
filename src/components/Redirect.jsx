import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Redirect Component
 * 
 * Immediately redirects to a specified path.
 * Use for legacy URL support and canonical path enforcement.
 */
const Redirect = ({ to }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);
  
  return null;
};

export default Redirect;

