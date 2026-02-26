const account = {
    keyID: 222,
    username: "aqil",
    password: '12345678',
}
// console.log(account)

let inputPasswordBaru = "8912812"
if (inputPasswordBaru.length < 5) {
    console.log("password minimal 5 karakter")
} else{
    const updatePassword = {
        ...account,
        password: inputPasswordBaru
    }
    console.log(updatePassword)
}
