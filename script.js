let muzyczka = new Audio("Among_Us_Trap_Remix_Bass_Boosted_Leonz.mp3")
let klakson = new Audio("clown_horn_-_sound_effect.mp3")
const sasin = document.querySelector("img")
// muzyczka.addEventListener(
//     "ended",
//     function () {
//         this.currentTime = 0
//         this.play()
//     },
//     false
// )
// muzyczka.play()

sasin.addEventListener("click", () => {
    klakson.play()
})
// async function getData() {
//     let apiUrl = "https://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?"

//     let country = "united-states"
//     let start = "2012/1/1"
//     let end = "2012/12/01"
//     let amount = "100"
//     let format = true
//     const data = { country, start, end, amount, format }
//     const options = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }
//     const res = await fetch(apiUrl, options)
//     const results = await res.json()
//     console.log(results)
// }
// getData()

// $("#calc").on("click", function calculate() {
//     $.getJSON(apiUrl, {
//         country: "united-states",
//         start: $("#startDate").val(),
//         end: $("#endDate").val(),
//         amount: $("#startPrice").val(),
//         format: true,
//     }).done(function (data) {
//         $("#endPrice").val(data)
//     })

// })

async function getData() {
    let apiUrl = "https://www.statbureau.org/get-data-json?jsoncallback=?"

    // let country = "united-states"
    // let start = "2012/1/1"
    // let end = "2012/12/01"
    // let amount = "100"
    // let format = false
    // const data = { country }
    // const options = {
    //     country: "united-states",
    // }
    const res = await fetch(apiUrl, {
        country: "united-states",
    })
    const results = await res.json()
    console.log(results)
}
getData().catch((error) => {
    console.error(error)
})
