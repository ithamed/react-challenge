import React from 'react';

const Input = (props) => {
  return (
    <div>
      <form className="row">
        <div className="col-auto">
          <label>Enter new user name to search:</label>
        </div>
        <div className="col-auto">
          <input type="text" name="input" className="form-control" placeholder="User name" value={props.input} onChange={props.onChange} />
        </div>
        <div className="col-auto">
          <input type="submit" value="submit" className="btn btn-primary mb-3" onClick={props.onClick}/>
        </div>
      </form>
    </div>
  );
}

export default Input;
