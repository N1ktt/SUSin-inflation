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
muzyczka.play()

sasin.addEventListener("click", () => {
    klakson.play()
})
