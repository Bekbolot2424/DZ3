import React, { useState, useMemo, useCallback } from "react";

const FilteredList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Beka" },
    { id: 2, name: "Atay" },
    { id: 3, name: "Akjol" },
  ]);

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const addUser = useCallback(() => {
    const newUser = {
      id: Date.now(),
      name: "User" + Math.floor(Math.random() * 100),
    };

    setUsers(prev => [...prev, newUser]);
  }, []);

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}placeholder="Search"/>

      <button onClick={addUser}>Добавить</button>

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
