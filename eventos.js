

const container = document.querySelector(".container-left")

const button = document.createElement("button")

button.textContent = ("Muestra más")

container.appendChild(button)


button.addEventListener("click", () => {
    const softSkills = document.getElementsByClassName("soft-skills")
    if (!softSkills[0]) {
        const p = document.createElement("p")
        p.textContent = "Mis habilidades personales son ser creativo, soy brillante creando lorem ipsum"

        const h2 = document.createElement("h2")
        h2.textContent = "Soft Skills"

        const div = document.createElement("div")
        div.classList.add("soft-skills")
        div.id = "first"
        div.appendChild(h2)
        div.appendChild(p)

        container.appendChild(div)
    }
    else {
        const firstSoftSkills = document.querySelector("div.soft-skills#first")
        firstSoftSkills.remove();
        console.log(firstSoftSkills);
    }

})

