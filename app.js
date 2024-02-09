let pronoun = ['el', 'mi', 'nuestro'];
let adj = ['gran', 'buen', 'bonito'];
let noun = ['mundo', 'viaje', 'lugar'];
let web = ['.com', '.es', '.net'];

for (let i = 0; i < pronoun.length; i++) {

    for (let j = 0; j < adj.length; j++) {
       
        for (let k = 0; k < noun.length; k++) {
            
            for (let l = 0; l < web.length; l++) {
                
                console.log(pronoun[i]+adj[j]+noun[k]+web[l])
            }
        }
    }        
}