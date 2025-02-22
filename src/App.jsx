import React, { useState } from "react";

import Input from "./components/Input";
import Card from "./components/Card";

const App = () => {
  const [users, setUsers] = useState([]);

  // Function to add new user
  const handleFormSubmit = (data) => {
    setUsers([...users, data]);
  };

  // Function to remove user
  const handleRemoveUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="flex flex-col items-center gap-5 mt-10 ">
      <Input handleFormSubmit={handleFormSubmit} />
      <div className="flex gap-4 flex-wrap justify-center">
        <Card users={users} handleRemoveUser={handleRemoveUser} />
      </div>
    </div>
  );
};

export default App;
