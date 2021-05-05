import React from 'react';

const Repositories = (props) => {
  return (
    <div>
      <h1>User Repositories</h1>
      {props.repos.map(data => {
        const link = data.description ? data.description : "there is not any descripthion"
      return <div key={data.id} className="form-control"><p>{data.name} : <a href={data.svn_url}>{link}</a></p></div>
      })}
    </div>
  );
}

export default Repositories;
