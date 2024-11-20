export default async function userRegister(userName:string, userEmail:string, userTel:string, userPassword:string,) {

    const date = new Date();

    const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
            tel: userTel,
            role: "user",
            password: userPassword,
            createdAt: date
        }),
    })
    if(!response.ok) {
        throw new Error("Error to Register")
    }

    return await response.json()
}
