import { User } from "../types/User";

const singleLineFullAddress = (user: User): string => {
  if (!user.address) return "";
  const { suite, street, city, zipcode } = user.address;
  return `${suite}, ${street}, ${city} ${zipcode}`;
};

export { singleLineFullAddress };
