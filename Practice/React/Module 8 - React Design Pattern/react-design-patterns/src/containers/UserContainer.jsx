import UserList from "../components/UserList";
import UseFetch from "../hooks/UseFetch";

const UserContainer = () => {
  const { users, loading, error } = UseFetch();
  return (
    <div>
      <UserList users={users} loading={loading} error={error} />
    </div>
  );
};

export default UserContainer;
