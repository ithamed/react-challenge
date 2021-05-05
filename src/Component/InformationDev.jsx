import React from 'react';

const InformationDev = (props) => {
  return (
    <div>
      <input className="form-control" type="text" value={props.value} readOnly />
    </div>
  );
}

export default InformationDev;
