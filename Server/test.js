const bcrypt = require('bcrypt')


const hashpassword = async()=>{
    const password = "password"

    console.time("hash")
    const hash = await bcrypt.hash(password ,11)
    console.log(password)
    console.log(hash)
    console.timeEnd("hash")

    console.time("hashmatch")
    const Ismatch = await bcrypt.compare("password" , hash)
    console.log(Ismatch)
    console.timeEnd("hashmatch")
}

hashpassword()





