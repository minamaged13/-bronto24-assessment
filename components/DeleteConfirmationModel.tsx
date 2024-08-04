import React from 'react';
import Backdrop from './BackDrop';

interface DeleteConfirmationModalProps {
  show: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ show, onClose, onDelete }) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4 text-black">Delete users list</h2>
            <h4 className=' text-gray-500 mb-4 mr-8'>Once you delete users list, you will lose all data associated with it.</h4>
            <div className="flex justify-end space-x-4">
              <button
                className="p-2 px-4 border  shadow-lg  text-gray-500 bg-white rounded"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="p-2 px-4  shadow-lg  bg-red-100 text-red-600 rounded"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmationModal;