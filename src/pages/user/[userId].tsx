import { useRouter } from "next/router";

import { users } from "../../data";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const selectedUser = users.find((user) => user.id === userId);
  console.log(selectedUser);

  return (
    <div>
      <h1>Pelode {userId}</h1>
    </div>
  );
};

export default UserProfile;
