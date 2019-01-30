class Positioning {
   constructor() {
      this.shipLength = [3, 3, 2, 2]
      this.position = ["horizontal", "vertical"]
      this.allCells = [...document.querySelectorAll(".cell")]
      this.shipCells = []
   }
   setPosition() {
      return Math.floor(Math.random() * this.position.length)
   }
   setCell(ship, position) {
      const firstCell = this.allCells[Math.floor(Math.random() * this.allCells.length)]
      this.firstCell = []
      if (ship === 3 && position === 0) {
         if (firstCell.id > 50) return this.setCell(3, 0);
         else this.firstCell = [ship, position, firstCell];
      } else if (ship === 3 && position === 1) {
         if (firstCell.id.charAt(1) === "1" || firstCell.id.charAt(1) === "2") {
            return this.setCell(3, 1);
         } else this.firstCell = [ship, position, firstCell];
      } else if (ship === 2 && position === 0) {
         if (firstCell.id > 60) return this.setCell(2, 0);
         else this.firstCell = [ship, position, firstCell];
      } else if (ship === 2 && position === 1) {
         if (firstCell.id.charAt(1) === "1") {
            return this.setCell(2, 1);
         } else this.firstCell = [ship, position, firstCell];
      }
      this.verifyConflict([...this.firstCell])
   }

   verifyConflict([ship, position, cell]) {
      if (cell.dataset.key === "active") {
         return this.setCell(ship, position)
      } else if (ship === 3 && position === 0) {
         if (document.getElementById(cell.id.charAt(0) / 1 + 1 + cell.id.charAt(1)).dataset.key === "active" || document.getElementById(cell.id.charAt(0) / 1 + 2 + cell.id.charAt(1)).dataset.key === "active") {
            return this.setCell(3, 0)
         } else return this.oneShip = [cell, document.getElementById(cell.id.charAt(0) / 1 + 1 + cell.id.charAt(1)), document.getElementById(cell.id.charAt(0) / 1 + 2 + cell.id.charAt(1))]

      } else if (ship === 3 && position === 1) {
         if (document.getElementById(cell.id.charAt(0) + cell.id.charAt(1) / 1 - 1).dataset.key === "active" || document.getElementById(cell.id.charAt(0) + cell.id.charAt(1) / 1 - 2).dataset.key === "active") {
            return this.setCell(3, 1)
         } else return this.oneShip = [cell, document.getElementById(cell.id.charAt(0) + cell.id.charAt(1) / 1 - 1), document.getElementById(cell.id.charAt(0) + cell.id.charAt(1) / 1 - 2)]

      } else if (ship === 2 && position === 0) {
         if (document.getElementById(cell.id.charAt(0) / 1 + 1 + cell.id.charAt(1)).dataset.key === "active") {
            return this.setCell(2, 0)
         } else return this.oneShip = [cell, document.getElementById(cell.id.charAt(0) / 1 + 1 + cell.id.charAt(1))]

      } else if (ship === 2 && position === 1) {
         if (document.getElementById(cell.id.charAt(0) + cell.id.charAt(1) / 1 - 1).dataset.key === "active") {
            return this.setCell(2, 1)
         } else return this.oneShip = [cell, document.getElementById(cell.id.charAt(0) + cell.id.charAt(1) / 1 - 1)]
      }
   }
   addShips([mainCell, secondCell, thirdCell]) {
      cellAttribute(mainCell)
      cellAttribute(secondCell)
      if (thirdCell) cellAttribute(thirdCell)

      function cellAttribute(cell) {
         cell.setAttribute("data-key", "active");
      }

   }
   renderShips() {
      for (let i = 0; i < this.shipLength.length; i++) {
         const ship = this.shipLength[i]
         const position = this.setPosition()
         this.setCell(ship, position)
         this.shipCells.push(this.oneShip)
         this.addShips([...this.oneShip])
         this.rendered = true
      }
   }
}