class Game {
   constructor() {
      this.stats = new Statistics()
      this.positioning = new Positioning()

      this.button = document.querySelector(".button")
      this.board = document.querySelector("div.board")
      this.end = false
      this.startGame()
   }

   startGame() {
      this.button.onmouseup = () => {
         if (!this.end) alert(`Game rules:
         - there are three battleships - one carrier (3 boxes) and two destroyers (2 boxes), rendered randomly on the board,
         - all battleships might be set either horizontally or vertically (one line),
         - battlesips cannot touch each other (minimum one box must separate them)
         - your task is to discover their location as quick as you can do
           `)
         this.button.style.display = 'none';
         this.board.style.opacity = 1;
         this.positioning.renderShips()
         this.positioning.allCells.forEach((cell) => {
            cell.addEventListener("click", (e) => {
               this.checkInput(e.target)
            })
         })
      }
   }

   checkInput(value) {
      if (!this.end) {
         if (value.className.includes("hit") || value.className.includes("strike")) alert("C'mon, choose a different one!")

         else {
            if (value.dataset.key === "active") {
               this.stats.addGameToStats(true, true, false)
               value.classList.add("hit")
               value.classList.add("shipHit")
               this.checkIfSunken([...this.positioning.shipCells])
            } else {
               this.stats.addGameToStats(true, false, false)
               value.classList.add("strike")
            }
         }
      } else alert("Why don't you play again?");

   }

   checkIfSunken([ship1, ship2, ship3]) {
      sunkenCheck.call(this, ship1)
      sunkenCheck.call(this, ship2)
      sunkenCheck.call(this, ship3)

      if (this.stats.destroyed.textContent == 3) {
         this.end = !this.end
         setTimeout(() => {
            this.endGame()
         }, 200)
      }

      function sunkenCheck(ship) {
         const hitShip = ship.filter(shipCell => (
            shipCell.className.includes("shipHit")
         ))

         if (ship.length === hitShip.length) {
            ship[0].classList.remove("shipHit")
            this.stats.addGameToStats(false, false, true)
            ship.forEach(ship => ship.classList.add("destroyed"))
         }
      }
   }

   endGame() {
      if (this.end) {
         alert("Congrats! You've got it!")
         this.button.textContent = "RESTART"
         this.button.style.display = 'inline-block'
         this.button.addEventListener("click", () => {
            location.reload()
         })
      }
   }
}