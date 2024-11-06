import { useState } from "react";

function Example2() {
  const [user, setUser] = useState({ surName: "Mica", role: "UX/UI Teacher" });
  console.log("%c THE COMPONENT EXAMPLE2 IS UPDATED", 'background: #222; color: #bada55');

  function modifyRole() {
    setUser({ ...user, role: "Father" });

    /*
        if I have this: const user = {surName: "Mica", role: "UX/UI Teacher"}

        I create a copy with the spread operator const anotherUser= {... user}
    */
  }

  return (
    <div>
      <h4>{user.surName}</h4>
      <p>{user.role}</p>
      <button onClick={modifyRole}>MODIFY ROLE</button>
    </div>
  );
}

export default Example2;
