class Rules {
   constructor() {
      this.stats = new Statistics()
      this.positioning = new Positioning()

      this.button = document.querySelector("button")
      this.flag = true
      this.end = false

      this.button.addEventListener("mousedown", () => {
         this.button.style.transform = "scale(.9)"
      })
      this.button.addEventListener("mouseup", () => {
         this.button.style.transform = "scale(1)"
      })
      this.startGame()
   }


   startGame() {
      alert(`Game rules:
- there are four battleships - two carriers (3 boxes) and two destroyers (2 boxes),
- all battleships might be set either horizontally or vertically (one line),
- your task is to discover their location as quick as you can do,

"Click on PLAY!"
  `)
      this.button.onmouseup = () => {
         if (this.flag) {
            this.flag = !this.flag
            alert("Choose your box!")
            this.positioning.renderShips()
            this.positioning.allCells.forEach((cell) => {
               cell.addEventListener("click", (e) => {
                  this.checkInput(e.target)
               })
            })
         } else if (this.stats.destroyed.textContent != 4) alert("You're in the game!")
      }
      // this.positioning.allCells.forEach((cell) => {
      //    cell.addEventListener("click", (e) => {
      //       if (!this.positioning.rendered) alert("Click on PLAY!")
      //    })
      // })
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
   checkIfSunken([ship1, ship2, ship3, ship4]) {
      sunkenCheck.call(this, ship1)
      sunkenCheck.call(this, ship2)
      sunkenCheck.call(this, ship3)
      sunkenCheck.call(this, ship4)

      if (this.stats.destroyed.textContent == 4) {
         const that = this
         this.end = !this.end
         setTimeout(this.endGame, 100, that)
      }

      function sunkenCheck(ship) {
         if (ship.length === 2) {
            if (ship[0].className.includes("shipHit") && ship[1].className.includes("shipHit")) {
               ship[0].classList.add("destroyed")
               ship[1].classList.add("destroyed")
               ship[0].classList.remove("shipHit")
               this.stats.addGameToStats(false, false, true)
            }

         } else if (ship.length === 3) {
            if (ship[0].className.includes("shipHit") && ship[1].className.includes("shipHit") && ship[2].className.includes("shipHit")) {
               ship[0].classList.add("destroyed")
               ship[1].classList.add("destroyed")
               ship[2].classList.add("destroyed")
               ship[0].classList.remove("shipHit")
               this.stats.addGameToStats(false, false, true)
            }
         }
      }
   }
   endGame(that) {
      if (that.end) {
         alert("Congrats! You've got it!")
         that.button.addEventListener("click", () => {
            location.reload()
         })
      }
   }
}