import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import Shop from "@/db/models/Shop";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const addShop = async (addShopForm: FormData) => {
    "use server";
    const name = addShopForm.get("name");
    const priceLevel = addShopForm.get("priceLevel");
    const address = addShopForm.get("address");
    const province = addShopForm.get("province");
    const postalcode = addShopForm.get("postalcode");
    const tel = addShopForm.get("tel");
    const picture = addShopForm.get("picture");

    try {
      await dbConnect();
      await Shop.create({
        name,
        priceLevel,
        address,
        province,
        postalcode,
        tel,
        picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("shops");
    redirect("/shop");
  };

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  const createdAt = new Date(profile.data.createdAt);

  const bg = {
    backgroundImage: "url(/img/bg.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }

  return (
    <main className="text-center min-h-screen items-center justify-between overflow-hidden" style={bg}>
      <div className="mt-[50px] max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, {profile.data.name}</h1>
          <p className="text-gray-600 text-sm">Member since {createdAt.toDateString()}</p>
        </div>

        <div className="mb-6">
          <table className="table-auto w-full text-sm text-gray-600">
            <tbody>
              <tr>
                <td className="py-2 font-medium">Email:</td>
                <td className="py-2">{profile.data.email}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Tel:</td>
                <td className="py-2">{profile.data.tel}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {
        (profile.data.role === "admin") ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create New Massage Shop</h2>
            <form action={addShop} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Shop Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter shop name"
                  className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="picture" className="text-gray-700 font-medium">
                  Picture URL
                </label>
                <input
                  type="text"
                  id="picture"
                  name="picture"
                  required
                  placeholder="Enter picture URL"
                  className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="text-gray-700 font-medium">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="Enter address"
                  className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="province" className="text-gray-700 font-medium">
                    Province
                  </label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    required
                    placeholder="Enter province"
                    className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="postalcode" className="text-gray-700 font-medium">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    required
                    placeholder="Enter postal code"
                    className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="tel" className="text-gray-700 font-medium">
                    Telephone
                  </label>
                  <input
                    type="text"
                    id="tel"
                    name="tel"
                    required
                    placeholder="Enter telephone"
                    className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="priceLevel" className="text-gray-700 font-medium">
                    Price Level (1-4)
                  </label>
                  <input
                    type="number"
                    id="priceLevel"
                    name="priceLevel"
                    required
                    min={1}
                    max={4}
                    placeholder="1"
                    className="mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
              >
                Add New Massage Shop
              </button>
            </form>
          </div>
        ): null
      }
      </div>
    </main>
  );
}
