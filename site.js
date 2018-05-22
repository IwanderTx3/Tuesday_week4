let link=document.createElement("link")
document.head.appendChild(link)
link.rel="stylesheet"
link.type="text/css"
link.href="styles.css"

let topMenu = document.createElement("div")
topMenu.className="topMenu"
document.body.appendChild(topMenu)

let logo = document.createElement("h1")
topMenu.appendChild(logo)
logo.append("HighOnCoding")

let home = document.createElement("a")
topMenu.appendChild(home)
home.append("Home")

let categories = document.createElement("a")
topMenu.appendChild(categories)
categories.append("Categories")

let article = document.createElement("div")
article.className="article"
document.body.appendChild(article)

    let articleTitle = document.createElement("h1")
    article.appendChild(articleTitle)
    articleTitle.append("Curse of the Current Reviews")

    let articleBody = document.createElement("div")
    article.appendChild(articleBody)
    articleBody.append("When you want to buy any application from the Apple iTunes store you have more choices than you can handle.  Most users scroll pasat the application description avoiding it like ads displyed on the right colum of your webpage.  Their choice is dependent on three important factors price, screenshot and reviews.")

let postOne=document.createElement("div")
postOne.className="post"
document.body.appendChild(postOne)

    let postOneTitle = document.createElement("h1")
    postOne.appendChild(postOneTitle)
    postOneTitle.append("Hello WatchKit")

    let postOneBody = document.createElement("div")
    postOne.appendChild(postOneBody)
    postOneBody.append("Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developer to create Apple Watch applications.  In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.")

    let postOneStats = document.createElement("ul")
    postOne.appendChild(postOneStats)
    postOneStats.innerHTML = `12 comments &nbsp; &nbsp; &nbsp; 124 likes`


    
let postTwo=document.createElement("div")
postTwo.className="post"
document.body.appendChild(postTwo)

    let postTwoTitle = document.createElement("h1")
    postTwo.appendChild(postTwoTitle)
    postTwoTitle.append("Introduction to Swift")

    let postTwoBody = document.createElement("div")
    postTwo.appendChild(postTwoBody)
    postTwoBody.append("Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in developement but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the swift language and how you can get started.")

    let postTwoStats = document.createElement("ul")
    postTwo.appendChild(postTwoStats)
    postTwoStats.innerHTML = `15 comments &nbsp; &nbsp; &nbsp; 45 likes`

