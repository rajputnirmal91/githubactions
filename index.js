import React, { useEffect, useState } from "react";

export default function UserList(props) {
const [users, setUsers] = useState([]);
const [filter, setFilter] = useState("")


useEffect(() => {
fetch("/api/users")
.then((res) => res.json())
.then((data) => {
setUsers(data);
});
}, []);


const filteredUsers = users.filter((u) => {
return u.name.toLowerCase().includes(filter.toLowerCase());
});

const handleClick = (user) => {
console.log("User clicked", user);
};

return ( <div> <h2>User List</h2>

  
  <input
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    placeholder="Search user"
  />

  
  <ul>
    {filteredUsers.map((user, index) => (
    
      <li key={index} onClick={() => handleClick(user)}>
     
        {user.name.toUpperCase()}

     
        <div
          dangerouslySetInnerHTML={{ __html: user.bio }}
        ></div>
      </li>
    ))}
  </ul>

 
  {props.showCount && <p>Total: {users.length}</p>}
</div>
```

);
}
