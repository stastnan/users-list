import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((usersData) => usersData.json())
        .then(setUsers);
    } catch (err) {
      Error("Users not loaded");
    } finally {
      () => {
        setIsLoading(false);
      };
    }
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
