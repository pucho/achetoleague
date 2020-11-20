import { useRouter } from "next/router";

import { users } from "../../data";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const selectedUser = users.find((user) => user.id === userId);

  const { name, id } = selectedUser;
  return (
    <div className="container mx-auto px-4 bg-gray-900 max-w-screen-sm border-2 border-indigo-200 rounded">
      <h1 className="text-white text-center">
        {name} - {id}
      </h1>
    </div>
  );
};

export default UserProfile;
