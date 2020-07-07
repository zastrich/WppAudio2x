let intervalAudios = false
let speed = 1

const interval = setInterval(() => {
    const header = document.querySelectorAll("header")[0]

    if(header){
        clearInterval(interval)

        const btnBase = document.createElement("div")
        btnBase.classList.add("PVMjB")

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("btn2x")

        button.addEventListener("click", btn => {
            if(btn.target.classList.contains("active")){
                btn.target.classList.remove("active")
                btn.target.closest(".PVMjB").classList.remove("active")
                
                speed = 1

                changeAudios(speed)

                if(intervalAudios) clearInterval(intervalAudios)
            } else {
                btn.target.classList.add("active")
                btn.target.closest(".PVMjB").classList.add("active")
                
                speed = 2

                changeAudios(speed)
                
                intervalAudios = setInterval(() => {
                    changeAudios(speed)
                }, 1000)
            }
        })

        btnBase.append(button)

        const listBtn = header.querySelectorAll("span")[1]
        listBtn.prepend(btnBase)
    }
}, 1000)

const changeAudios = (speed) => {
    const audios = document.querySelectorAll("audio")

    audios.forEach(e => {
        e.playbackRate = speed
    })
}