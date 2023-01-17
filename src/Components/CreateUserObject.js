const createUserObject = (id, formData) => {
    return{
      id:id,
      name:formData.name,
      age: formData.age,
      city: formData.city,
    }
};
export default createUserObject;
