import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import CreateUserObject from "./Components/CreateUserObject";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    city: "",
  });

  const [users, setUsers] = useState([]);
  const [activeInd, setActiveInd] = useState(null);

  const addUser = (e) => {
    e.preventDefault();
    if(activeInd!=null){
      updateUser();
    }
    else{
      createUser();
    }
    resetFormData();
  };

  const createUser = () => {
    const user = CreateUserObject(uuidv4(), formData);
    setUsers([...users, user]);
  };

  const updateUser = () => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[activeInd] = { ...updatedUsers[activeInd], ...formData };
      return updatedUsers;
    });
    setActiveInd(null);
  };

  const resetFormData = () => {
    setFormData({ name: "", age: 0, city: "" });
  };

  const handleEdit = (index) => {
    const user = users[index];
    setFormData({ name: user.name, age: user.age, city: user.city });
    setActiveInd(index);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers([...newUsers]);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  }

  return (
    <div>
      <center>
        <h2 className="main-header">React CRUD Operations</h2>
      </center>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <Form
              onSubmit={addUser}
              formData={formData}
              onChange={onChange}
              activeInd={activeInd}
            />
          </div>
        </div>
      </div>

      <UserList
        users={users}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default App;
