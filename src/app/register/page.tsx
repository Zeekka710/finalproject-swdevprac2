import User from "@/db/models/User"
import { dbConnect } from '@/db/dbConnect'
import { redirect } from 'next/navigation'

export default async function RegisterPage() {
    
    const addUser = async (addUserForm:FormData) => {
        "use server"
        const name = addUserForm.get('name')
        const email = addUserForm.get('email')
        const tel = addUserForm.get('tel')
        const password = addUserForm.get('password')

        try {
            await dbConnect()
            const user = await User.create({
                'name': name,
                'email': email,
                'tel': tel,
                'password': password
            })
        } catch (error) {
            console.log(error)
        }
        redirect('/')
    }

    const bg = {
        backgroundImage: "url(/img/bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <main className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center" style={bg}>
            <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Create an Account</h1>
                <p className="text-gray-600 mb-6 text-center">Join us and enjoy exclusive benefits.</p>

                <form action={addUser} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="tel" className="block text-gray-700 font-medium">Telephone</label>
                        <input
                            type="text"
                            id="tel"
                            name="tel"
                            required
                            placeholder="Enter your phone number"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg text-white font-bold bg-blue-600 hover:bg-blue-700">Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{' '}
                    <a href="/api/auth/signin" className="text-blue-600 hover:underline">Sign In</a>
                </p>
            </div>
        </main>
    );
}
