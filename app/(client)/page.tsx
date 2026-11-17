import { z } from "zod";

const userSchema = z.object({
  firstName: z.string(),
  email: z.email(),
});

const user = {
  firstName: "Jan",
  email: "przemek.bialkwno@gmail.com",
};

console.log(userSchema.safeParse(user));

const HomePage = async () => {
  return (
    <h2>
      <p>page</p>
      <p>home page to be sepcific</p>
      <p>hello world</p>
    </h2>
  );
};

export default HomePage;
