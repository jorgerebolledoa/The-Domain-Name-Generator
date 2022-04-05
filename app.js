gflet pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let randopr = Math.floor(Math.random() * (pronoun.length - 0)) + 0;
let randomad = Math.floor(Math.random() * (adj.length - 0)) + 0;
let randomnoun = Math.floor(Math.random() * (noun.length - 0)) + 0;
console.log(pronoun[randopr] + adj[randomad] + noun[randomnoun] +".com")