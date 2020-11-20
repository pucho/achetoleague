import { useRouter } from "next/router";

import { users } from "../../data";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const selectedUser = users.find((user) => user.id === userId);
  console.log(selectedUser);

  if (!selectedUser) return <div>...loading</div>;

  return (
    <div className="">
      <h1>
        {selectedUser.name} {selectedUser.id}
      </h1>
    </div>
  );
};

export default UserProfile;
