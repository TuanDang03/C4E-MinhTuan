//BÀI 4:
let objective = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

//Cách 1:
function thaydoi(change){
  change.bar.xyz = 606
}
thaydoi(objective)
console.log(objective.bar.xyz)

//Cách 2:
objective.bar[3].xyz = 606
console.log(objective.bar[3].xyz)



