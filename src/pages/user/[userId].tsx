import { Heading } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Container } from "../../components/Container";

import { users } from "../../data";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;

  const selectedUser = users.find((user) => user.id === userId);
  console.log(selectedUser);

  return (
    <Container>
      <Heading>Pelode {userId}</Heading>
    </Container>
  );
};

export default UserProfile;
