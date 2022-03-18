let announceMorning = function (name) {
    let trimmedName = name.trim()
    let capitalizedFirstLetter = trimmedName[0].toLocaleUpperCase()
    let lowercasedRemainder = trimmedName.slice(1).toLocaleLowerCase()
    let titleCasedName = capitalizedFirstLetter + lowercasedRemainder

    let weekday = new Date().toLocaleDateString("default", { weekday: "long" })

    return `Good morning, ${titleCasedName}! It is now ${weekday}!`
}

let result = announceMorning("   deLancey")
console.assert(result === "Good morning, Delancey! It is now Friday!", result)



let createAnnouncementHeader = function (name) {
    return `
        <h1>
            ${ announceMorning(name) }
        </h1>
    `
}

let h1 = createAnnouncementHeader("   deLancey")


// component
let createBlogArticle = function (title, content, author, date) {
    return `
        <article>
            <header><h2>${title}</h2></header>
            
            ${content}

            <footer>- By ${author} on ${date}</footer>
        </article>
    `
}

{
    let title = "Hotdogs For Sale!"
    let author = "Sherbert Aurelius Bagphone"
    let date = new Date().toLocaleDateString("default", { weekday: "long" })
    let content = `
        <p>80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind. 80 days around the world, no we won’t say a word before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>

        <p>Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah… wishing for The Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah… some day we will find The Cities of Gold.</p>
        
        <p>Knight Rider, a shadowy flight into the dangerous world of a man who does not exist. Michael Knight, a young loner on a crusade to champion the cause of the innocent, the helpless in a world of criminals who operate above the law.</p>
    `

    document.write(createBlogArticle(
        title, 
        content, 
        author, 
        date
    ))
}


{
    let title = "There Is Always Money in the Banana Stand!"
    let author = "Sherbert Aurelius Bagphone"
    let date = new Date().toLocaleDateString("default", { weekday: "long" })
    let content = `
        <p>Cupcake ipsum dolor sit amet marshmallow icing sweet. Sugar plum pastry chocolate cake jelly beans croissant gummi bears chocolate gummi bears sesame snaps. Chocolate cake danish biscuit jelly pudding candy canes. Biscuit jelly topping pie sweet roll donut powder oat cake sweet roll. Sweet macaroon I love chocolate bar donut. Sesame snaps I love apple pie chocolate bar ice cream dessert.</p>

        <p>Macaroon powder I love croissant gummies cheesecake cotton candy gummies sweet. Powder macaroon toffee biscuit cake. Sweet roll tart cheesecake cupcake sweet roll soufflé lemon drops. Danish topping muffin brownie candy cake chocolate cake candy canes. I love I love gummies powder danish candy danish oat cake. Apple pie dessert jelly-o lemon drops tootsie roll lemon drops chocolate. Soufflé soufflé candy marzipan shortbread danish. Sweet roll I love dessert I love tart I love chupa chups lemon drops jujubes. Chocolate bar danish cheesecake powder cotton candy liquorice carrot cake. Apple pie jujubes pudding dragée shortbread tart chocolate cake cheesecake.</p>
        
        <p>Pie pie cake cotton candy danish carrot cake jelly-o marzipan. Halvah toffee ice cream I love brownie. Candy canes halvah cake jelly apple pie cotton candy donut. Pie toffee oat cake sweet roll I love pudding sweet roll. Jujubes dessert candy brownie fruitcake chupa chups halvah. Powder cupcake chocolate cake apple pie gummi bears cake. Chocolate tootsie roll marshmallow sweet cupcake lollipop.</p>
        
        <p>Toffee cotton candy pie cheesecake shortbread lemon drops macaroon. Cookie carrot cake wafer I love toffee danish apple pie. Marzipan liquorice icing chocolate candy I love tiramisu powder wafer. Cake soufflé I love tart cake. Gummi bears sweet roll lemon drops liquorice pastry tart. Pie jelly beans I love cake chocolate bar powder icing cheesecake. Ice cream I love cookie jujubes candy. Cake bear claw carrot cake shortbread chocolate cake topping.</p>
        
        <p>Tootsie roll icing jelly chocolate cake jujubes pie sugar plum caramels. Jelly beans carrot cake I love oat cake brownie sweet roll bonbon donut. Halvah jelly-o apple pie I love marshmallow sesame snaps chupa chups. Cotton candy chocolate cake I love pudding chupa chups marzipan dragée. Jelly beans cake gummies macaroon cotton candy cake jelly beans. Cheesecake gingerbread sesame snaps soufflé I love. Icing gingerbread ice cream marzipan oat cake liquorice carrot cake ice cream. Ice cream tart tart I love bonbon carrot cake.</p>
    `

    document.write(createBlogArticle(
        title, 
        content, 
        author, 
        date
    ))
}




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