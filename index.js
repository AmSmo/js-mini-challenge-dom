/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header);
header.style.color = "red";

/***** Deliverable 2 *****/
const playerContainer = document.querySelector(".player-container")
console.log(playerContainer)
PLAYERS.forEach(player => {
    const playerDiv = document.createElement('div')
    playerDiv.className="player"
    playerDiv.setAttribute("data-number", `${player.number}`)
    const newPlayer = `
        <h3>
            ${player.name} (<em>${player.nickname}</em>)
  </h3>
        <img src="${player.photo}" alt="${player.name}">
`

    playerDiv.innerHTML = newPlayer
    playerContainer.appendChild(playerDiv)
});

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)


/***** Deliverable 4 *****/

document.querySelector("[data-number='7']").remove()