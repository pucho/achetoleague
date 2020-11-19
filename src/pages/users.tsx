import useSWR from "swr";
import { fetcher } from "../utils";

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const Users = () => {
  const { data, error } = useSWR("{ users { name } }", fetcher);

  if (error) return <h1>failed to load</h1>;
  if (data === undefined) return <h1>loading...</h1>;

  return (
    <div>
      <ul>
        {data.users.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
