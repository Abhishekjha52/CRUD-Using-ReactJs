import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
  });

  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false); //to track the edit option..if edit is true then add changes to update
  const [activeInd, setActiveInd] = useState(null);

  const addUser = (e) => {
    e.preventDefault();
    const id = uuidv4(); // using uuid to generate unique ids
    const user = {
      id,
      name: formData.name,
      age: formData.age,
      city: formData.city,
    };

    if (edit) {
      //update user
      Object.assign(users[activeInd], user);
      setUsers([...users]);
      setEdit(false);
      setActiveInd(null);
    } else {
      //add user
      setUsers([...users, user]);
    }
    setFormData({ name: "", age: "", city: "" });
  };

  const handleEdit = (index) => {
    const user = users[index];
    setFormData({ name: user.name, age: user.age, city: user.city });
    setEdit(true);
    setActiveInd(index);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newUsers = users.filter((user) => user.id !== id);

      setUsers([...newUsers]);
    }
  };

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
              setFormData={(e) => {
                const { name, value } = e.target;
                setFormData((prevState) => ({
                  ...prevState,
                  [name]: value,
                }));
              }}
              edit={edit}
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
