import dbConnect from "@/lib/server";

const HomePage = async () => {
  try {
    await dbConnect();

    return <h2>polaczono</h2>;
  } catch {
    return <h2>nie [polaczono]</h2>;
  }
};

export default HomePage;
