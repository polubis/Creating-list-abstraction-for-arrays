import * as React from "react";
import { render } from "react-dom";
import { List } from "./final";
import { getUsers, User } from "./mocks";

function App() {
  const [users, setUsers] = React.useState(new List<User>());

  React.useEffect(() => {
    (async () => {
      setUsers(new List(await getUsers()));
    })();
  }, []);

  return (
    <>
      <ul>
        {users.toArray().map((user) => (
          <li
            key={user.id}
            style={{
              color: users.toCurrent()?.id === user.id ? "red" : undefined
            }}
          >
            {user.username}
          </li>
        ))}
      </ul>
      <button onClick={() => setUsers((prevUsers) => prevUsers.prev())}>
        Prev
      </button>
      <button onClick={() => setUsers((prevUsers) => prevUsers.next())}>
        Next
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
