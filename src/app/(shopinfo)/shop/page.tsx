import getShops from "@/libs/getShops";
import ShopCatalog from "@/components/ShopCatalog";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";

export default async function Shop() {
  const bg = {
    backgroundImage: "url(/img/bg.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.email === "ta@gmail.com"; // Check if the user is an admin
  const token = session?.user?.token || "";

  console.log("Session Data:", session);
  console.log("Is Admin:", isAdmin);
  console.log("Token:", token);

  const shops = await getShops();

  return (
    <main
      className="text-center min-h-screen items-center justify-between overflow-hidden"
      style={bg}
    >
      <h1 className="mt-[100px] tex-xl font-medium">Select Your Package</h1>
      <ShopCatalog shops={shops.data} isAdmin={isAdmin} token={token} />
    </main>
  );
}

export const dynamic = "force-dynamic"; // Ensure the route is dynamically rendered
