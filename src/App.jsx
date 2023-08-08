import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersData = await data.json();
        setUsers(usersData);
      } catch (err) {
        alert("Users not loaded");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Users list</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users?.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      )}
    </>
  );
}
export default App;
