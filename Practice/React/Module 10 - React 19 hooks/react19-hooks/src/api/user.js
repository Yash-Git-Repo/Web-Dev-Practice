
export const loginUser = async (email, password) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "shivhareyash19@gmail.com" && password === "password") {
                resolve({
                    success: true,
                    data: {
                        email,
                        username: "yashh",
                        token: "156545asdsdfd5sd4wsdwedew85we98d4w"
                    },
                })
            } else {
                reject({
                    success: false,
                    error:"Invalid Credantials"
                })
            }

        }, 1000);
    })

}