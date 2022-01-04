import React, { useState } from 'react';

import { BsThreeDots } from 'react-icons/bs';

const DeletePopUp = () => {
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClick = (e) => {
    e.preventDefault();
    // console.log('hi');
    setShowDelete(!showDelete);
  };

  return (
    <>
      <button onClick={handleDeleteClick}>
        <BsThreeDots size={24} />
      </button>
      {showDelete && <p>Delete</p>}
    </>
  );
};

export default DeletePopUp;
