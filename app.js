let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com ",".cl ",".uk ",".cl "]


for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < dom.length; d++) {
            console.log(pronoun[a] + adj[b] + noun[c]+ dom[d]);
          }
      
    }
  }
}
