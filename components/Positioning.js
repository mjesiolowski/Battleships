class Positioning {
   constructor() {
      this.shipLength = [3, 2, 2]
      this.position = ["horizontal", "vertical"]
      this.allCells = [...document.querySelectorAll(".cell")]
      this.shipCells = []
   }
   setPosition() {
      //horizontal or vertical
      return Math.floor(Math.random() * this.position.length)
   }
   setCell(ship, position) {
      //sets coordinates of the first cell for each ship
      const firstCell = this.allCells[Math.floor(Math.random() * this.allCells.length)]

      if (ship === 3 && position === 0) {
         if (firstCell.id > 50) return this.setCell(3, 0);

      } else if (ship === 3 && position === 1) {
         if (firstCell.id.charAt(1) === "1" || firstCell.id.charAt(1) === "2") return this.setCell(3, 1);

      } else if (ship === 2 && position === 0) {
         if (firstCell.id > 60) return this.setCell(2, 0);

      } else if (ship === 2 && position === 1) {
         if (firstCell.id.charAt(1) === "1") return this.setCell(2, 1);
      }

      this.verifyConflict([ship, position, firstCell])
   }

   verifyConflict([ship, position, cell]) {
      //checks if the first cell and neighbour cells can be positioned without any confilcts
      const firstIdChar = cell.id.charAt(0)
      const secondIdChar = cell.id.charAt(1)
      const rightCell = document.getElementById(firstIdChar / 1 + 1 + secondIdChar)
      const doubleRightCell = document.getElementById(firstIdChar / 1 + 2 + secondIdChar)
      const upperCell = document.getElementById(firstIdChar + secondIdChar - 1)
      const doubleUpperCell = document.getElementById(firstIdChar + secondIdChar - 2)

      if (cell.dataset.key === "active" || cell.dataset.key === "conflictedArea") {
         return this.setCell(ship, position)

      } else if (ship === 3 && position === 0) {
         if (rightCell.dataset.key === "active" || rightCell.dataset.key === "conflictedArea" || doubleRightCell.dataset.key === "active" || doubleRightCell.dataset.key === "conflictedArea") {
            return this.setCell(3, 0)
         } else return this.oneShip = [cell, rightCell, doubleRightCell]

      } else if (ship === 3 && position === 1) {
         if (upperCell.dataset.key === "active" || upperCell.dataset.key === "conflictedArea" || doubleUpperCell.dataset.key === "active" || doubleUpperCell.dataset.key === "conflictedArea") {
            return this.setCell(3, 1)
         } else return this.oneShip = [cell, upperCell, doubleUpperCell]

      } else if (ship === 2 && position === 0) {
         if (rightCell.dataset.key === "active" || rightCell.dataset.key === "conflictedArea") {
            return this.setCell(2, 0)
         } else return this.oneShip = [cell, rightCell]

      } else if (ship === 2 && position === 1) {
         if (upperCell.dataset.key === "active" || upperCell.dataset.key === "conflictedArea") {
            return this.setCell(2, 1)
         } else return this.oneShip = [cell, upperCell]
      }
   }

   renderShips() {
      for (let i = 0; i < this.shipLength.length; i++) {
         const ship = this.shipLength[i]
         const position = this.setPosition()
         this.setCell(ship, position)
         this.addShips([...this.oneShip])
         this.addConflictArea([...this.oneShip])
         this.shipCells.push(this.oneShip)
      }
   }

   addConflictArea([...shipPosition]) {
      //adding "conflictedArea" data attribute to all cells around the ships
      const cells = [...shipPosition]

      for (let i = 0; i < cells.length; i++) {
         const firstIdChar = cells[i].id.charAt(0)
         const secondIdChar = cells[i].id.charAt(1)

         const leftCell = document.getElementById(firstIdChar - 1 + secondIdChar)
         const rightCell = document.getElementById(firstIdChar / 1 + 1 + secondIdChar)

         const upperCell = document.getElementById(firstIdChar + secondIdChar - 1)
         const lowerCell = document.getElementById(firstIdChar + secondIdChar - 0 + 1)

         const lowerLeftCell = document.getElementById(firstIdChar - 1 + secondIdChar - 0 + 1)
         const lowerRigthCell = document.getElementById(firstIdChar - 0 + 1 + secondIdChar - 0 + 1)

         const upperLeftCell = document.getElementById(firstIdChar - 1 + secondIdChar - 1)
         const upperRightCell = document.getElementById(firstIdChar - 0 + 1 + secondIdChar - 1)

         const position = [leftCell, rightCell, upperCell, lowerCell, lowerLeftCell, lowerRigthCell, upperLeftCell, upperRightCell]

         for (let y = 0; y < position.length; y++) {
            if (position[y] && !position[y].dataset.key) {
               position[y].setAttribute("data-key", "conflictedArea")
            }
         }
      }
   }

   addShips([mainCell, secondCell, thirdCell]) {
      //adding "active" data attribute to the cells with ships
      function cellAttribute(cell) {
         cell.setAttribute("data-key", "active");
      }

      cellAttribute(mainCell)
      cellAttribute(secondCell)
      if (thirdCell) cellAttribute(thirdCell)
   }


}