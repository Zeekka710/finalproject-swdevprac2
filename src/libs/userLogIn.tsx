export default async function userLogin(userEmail:string, userPassword:string) {

    const response = await fetch("https://finalproject-beckend-swdevprac2.vercel.app/api/v1/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword
        }),
    })
    if(!response.ok) {
        throw new Error("Error to log-in")
    }

    return await response.json()
}