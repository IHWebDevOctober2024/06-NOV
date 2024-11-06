import usersJson from "../data/users.json";
import UserCard from "./UserCard";
import { useState } from "react";

function Users() {
  const [displayUsers, setDisplayUsers] = useState(false);
  const [usersArray, setUsersArray] = useState(usersJson);

  function kara() {
    if (displayUsers) {
      return usersArray.map((user) => {
        return <UserCard key={user.id} user={user} />;
      });
    }
  }

  function renderUsers() {
    return (
      displayUsers &&
      usersArray.map((user) => <UserCard key={user.id} user={user} />)
    );
  }

  function sortUsers() {
    const copyOfUsers = [...usersArray];

    copyOfUsers.sort((a, b) => {
      const firstNameA = a.name.split(" ")[1];
      const firstNameB = b.name.split(" ")[1];

      console.log(firstNameA);

      return firstNameA.localeCompare(firstNameB);
    });

    console.log(copyOfUsers);

    setUsersArray(copyOfUsers);
  }

  return (
    <>
      <h2>Users here</h2>
      <button onClick={() => setDisplayUsers(!displayUsers)}>
        {displayUsers ? "Hide" : "Display"} users
      </button>

      {displayUsers && (
        <>
          <button onClick={sortUsers}>Sort alphabetically</button>
          {usersArray.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
      {/*renderUsers()*/}
      {/* kara() */}
    </>
  );
}

export default Users;
