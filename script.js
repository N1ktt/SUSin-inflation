let muzyczka = new Audio("Among_Us_Trap_Remix_Bass_Boosted_Leonz.mp3")
let klakson = new Audio("clown_horn_-_sound_effect.mp3")
const sasin = document.querySelector("img")
muzyczka.addEventListener(
    "ended",
    function () {
        this.currentTime = 0
        this.play()
    },
    false
)
setTimeout(() => {
    const section = document.createElement("section")
    const p1 = document.createElement("p")
    p1.innerText = "Gratulacje użytkowniku wygrałeś darmowego Iphone 6S!"
    section.append(p1)
    const p2 = document.createElement("p")
    p2.innerText = "Aby odebrać nagrodę kliknij poniższy przycisk"
    section.append(p2)
    const input = document.createElement("input")
    input.type = "button"
    input.value = "Kliknij tutaj"
    section.append(input)
    document.querySelector("body").append(section)
    function remove_pop() {
        document.querySelector("section").remove()
        muzyczka.play()
        document.querySelector("body").removeEventListener("click", remove_pop)
    }
    document.querySelector("body").addEventListener("click", remove_pop)
}, 6000)

sasin.addEventListener("click", () => {
    klakson.play()
})

async function getData() {
    let today = new Date()

    let todayYear = today.getFullYear()
    let todayMonth = today.getMonth()
    let prevMonth = todayMonth - 2
    let prevYear = todayYear
    if (prevMonth == -1) {
        prevMonth = 11
        prevYear -= 1
    } else if (prevMonth == -2) {
        prevMonth = 10
        prevYear -= 1
    }
    prevMonth += 1
    todayMonth += 1
    if (prevMonth < 10) {
        prevMonth = "0" + prevMonth
    }
    if (todayMonth < 10) {
        todayMonth = "0" + todayMonth
    }

    // url dla polski 3 miesiace
    const apiUrl = `https://stats.oecd.org/SDMX-JSON/data/PRICES_CPI/POL.CPALTT01.CTGY.M/all?startTime=${prevYear}-${prevMonth}&endTime=${todayYear}-${todayMonth}&dimensionAtObservation=allDimensions`
    // console.log(apiUrl)
    const res = await fetch(apiUrl)
    const results = await res.json()
    let span = document.querySelector("span")
    let inflation = 0
    if (results.dataSets[0].observations["0:0:0:0:2"] == undefined) {
        if (results.dataSets[0].observations["0:0:0:0:1"] == undefined) {
            // console.log(results.dataSets[0].observations["0:0:0:0:0"][0])
            inflation = results.dataSets[0].observations["0:0:0:0:0"][0]
        } else {
            // console.log(results.dataSets[0].observations["0:0:0:0:1"][0])
            inflation = results.dataSets[0].observations["0:0:0:0:1"][0]
        }
    } else {
        // console.log(results.dataSets[0].observations["0:0:0:0:2"][0])
        inflation = results.dataSets[0].observations["0:0:0:0:2"][0]
    }

    inflation *= 10
    inflation = Math.round(inflation)
    inflation /= 10
    span.innerHTML = inflation
}
getData().catch((error) => {
    console.error("Data recieved")
    console.error(error)
})

// data from https://www.oecd.org/
