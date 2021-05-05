import React from 'react';

const Image = (props) => {
  return (
    <div className="col">
        <img src={props.user.avatar_url} alt="avatar"/>
    </div>
  );
}

export default Image;
