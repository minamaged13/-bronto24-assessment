
import React from 'react';

interface BackdropProps {
  show: boolean;
  onClick?: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show, onClick }) => {
  return (
    <>
      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40  "
          onClick={onClick}
        ></div>
      )}
    </>
  );
};

export default Backdrop;
