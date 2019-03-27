class Statistics {
   constructor() {
      this.stats = [0, 0, 0]
      this.strikes = document.querySelector(".strikes")
      this.hits = document.querySelector(".hits")
      this.destroyed = document.querySelector(".destroy")
   }
   addGameToStats(strike, hit, destroyed) {
      if (strike) {
         this.stats[0]++
         this.strikes.textContent = this.stats[0]
      }
      if (hit) {
         this.stats[1]++
         this.hits.textContent = this.stats[1]
      }
      if (destroyed) {
         this.stats[2]++
         this.destroyed.textContent = this.stats[2]
      }
   }
}