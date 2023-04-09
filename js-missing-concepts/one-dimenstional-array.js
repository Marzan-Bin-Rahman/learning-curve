let scores = [12, 345, 556, 2, 456, 290, 89]

const higestScore = (scores) => {
     let max = scores[0]
     for (i = 1; i < scores.length; i++) {
          if (max < scores[i]) {
               max = scores[i]
          }
     }
     return max
}
console.log(higestScore(scores));