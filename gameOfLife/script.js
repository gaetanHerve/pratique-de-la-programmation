/* let monArray = new Array();
let monArray2 = new Array();

monArray.push("test");
monArray.push("test2");

monArray2.push("test3");
monArray.push(monArray2);

console.log(monArray); */


const height = 10;
const width = 10;

let grid = new Array();

for (let i=0; i<height; i++) { 
    let line = new Array();
    for (let j=0; j<width; j++) {
        let value = Math.round(Math.random());
        line.push(value);
    }
    grid.push(line);
}
console.log(grid);

gaetan.herve@lilo.org



