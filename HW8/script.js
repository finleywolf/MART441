class Slide {

constructor(title, image, description, author, year) {
    this.title = title
    this.image = image
    this.description = description
    this.author = author
    this.year = year
}

}

let slide1 = new Slide(
"Women's March Protest",
"images/womensmarch.jpeg",
"A protester holds a feminist sign during the 2017 Women's March. Millions of people marched globally advocating for gender equality, reproductive rights, and political representation. The march became one of the largest coordinated protests in history.",
"NYT",
"2017"
)

let slide2 = new Slide(
"Iranian Women Protest",
"images/iranprotest.jpg",
"A woman stands publicly cutting her hair during protests in Iran. The image symbolizes resistance to mandatory dress laws and a broader movement demanding women's autonomy and freedom.",
"Getty Images",
"2022"
)

let slide3 = new Slide(
"Malala at the United Nations",
"images/malala.jpeg",
"Malala Yousafzai speaks at the United Nations advocating for girls' education worldwide. After surviving an assassination attempt by the Taliban, Malala became a global symbol of education rights for girls.",
"International Business Times / Reuters",
"2013"
)

let slide4 = new Slide(
"We Can Do It!",
"images/rosie.jpeg",
"This famous World War II poster depicts Rosie the Riveter, representing women working industrial jobs while men were at war. It later became a powerful feminist icon symbolizing women's labor and empowerment.",
"J. Howard Miller",
"1943"
)

let slide5 = new Slide(
"A Rapist in Your Path",
"images/lastesis.jpeg",
"Chilean feminist collective Las Tesis perform a protest against gender violence. Their performance spread globally, becoming a powerful symbol of collective resistance to sexual violence and patriarchal systems.",
"Las Tesis Collective",
"2019"
)


let slides = [slide1, slide2, slide3, slide4, slide5]

let lastIndex = -1
function nextSlide() {

let randomIndex

do {
    randomIndex = Math.floor(Math.random() * slides.length)
} while (randomIndex === lastIndex)

lastIndex = randomIndex

let slide = slides[randomIndex]

document.getElementById("slideImage").src = slide.image
document.getElementById("title").innerText = slide.title
document.getElementById("description").innerText = slide.description
document.getElementById("author").innerText = "Author: " + slide.author
document.getElementById("year").innerText = "Year: " + slide.year

}