
const student={
     name:"Rakib",
     Id: 192
}
let r="Rakib";
for(let i of r)
{
    console.log("val of I is", i);
}
console.log(typeof(student));
for( let j in student)
{
    console.log(student[j]);
}