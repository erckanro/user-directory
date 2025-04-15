export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    suite: string;
    street: string;
    city: string;
    zipcode: string;
  };
}
