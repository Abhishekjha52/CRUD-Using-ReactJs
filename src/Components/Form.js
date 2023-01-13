import React from "react";

const Form = ({ onSubmit, formData, setFormData, edit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label className="font-weight-bold">Name</label>
        <input
          type="text"
          name="name"
          className="form-control form-control-lg"
          value={formData.name}
          placeholder="Enter Name"
          onChange={setFormData}
        />
      </div>
      <br />
      <div className="form-group">
        <label className="font-weight-bold">Age</label>
        <input
          type="number"
          name="age"
          className="form-control form-control-lg"
          value={formData.age}
          placeholder="Enter Age"
          onChange={setFormData}
        />
      </div>
      <br />
      <div className="form-group">
        <label className="font-weight-bold">City</label>
        <input
          type="text"
          name="city"
          className="form-control form-control-lg"
          value={formData.city}
          placeholder="Enter City"
          onChange={setFormData}
        />
      </div>
      <br />
      <button className="btn btn-success btn-lg btn-block">
        {edit ? "UPDATE" : "ADD"}
      </button>
    </form>
  );
};

export default Form;
