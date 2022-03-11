let announceMorning = function (name) {
    let trimmedName = name.trim()
    let capitalizedFirstLetter = trimmedName[0].toLocaleUpperCase()
    let lowercasedRemainder = trimmedName.slice(1).toLocaleLowerCase()
    let titleCasedName = capitalizedFirstLetter + lowercasedRemainder

    let weekday = new Date().toLocaleDateString("default", { weekday: "long" })

    return "Good morning, " 
        + titleCasedName 
        + "! It is now " 
        + weekday 
        + "!"
}

let result = announceMorning("   deLancey")
console.assert(result === "Good morning, Delancey! It is now Friday!", result)


let createAnnouncementHeader = function (name) {
    return "<h1>" + announceMorning(name) + "</h1>"
}

let h1 = createAnnouncementHeader("   deLancey")


// CODE from EARLY part of the topic session:

// let username = "bandit"

// console.log(username[0])
// console.log(username[1])
// console.log(username[2])
// console.log(username[3])
// console.log(username[4])
// console.log(username[5])

// console.log(username[username.length - 1])

// console.log(username.length) // length is always
                             // one greater than
                             // the last index.

// 0 1 2 3 4 5 6 7 8 9
// b a n d i t        