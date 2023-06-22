// rappel des donnnees
let string = "salut";
let number = 23;
let boolean = true;
let maVariable;

// les Tableaux
let array = ["bordeaux", "toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["bordeaux", 24, true, [1, 2], { nom: "denis" }];

// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 23,
  techno: ["javascript", "react", "nodejs"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// objet.age = 45;

// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 23,
    techno: ["javascript", "react", "nodejs"],
    admin: false,
  },

  {
    pseudo: "Samin",
    age: 24,
    techno: ["CSS", "react", "nodejs"],
    admin: false,
  },

  {
    pseudo: "Nikola",
    age: 29,
    techno: ["PHP", "react", "nodejs"],
    admin: true,
  },
];

// console.log(data[2].pseudo[0]);

//les structures de controles
if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + " est plus age que " + data[1].pseudo);
} else {
  console.log(data[1].pseudo + " est plus age que " + data[0].pseudo);
}

// while
// let w = 0;
// while (w < 10) {
//   w++;
//   console.log("la valeure de w est de : " + w);
// }

//--------------------------
// do while

// do {
//   console.log(d);
// } while (d < 5);

// les boucles for

for (const user of data) {
  //   document.body.innerHTML += `<li> ${user.pseudo}
  //    - ${user.age} ans </li>`;
}

// console.log(data.length);

//  on declare la valeure de i | o n dit jusqu'ou on boucle
// on incremente i la condition 2 n'est pas remplie

for (i = 0; i < data.length; i++) {
  //console.log(i);
  // console.log(data[i].techno[0]);
  // document.body.innerHTML += "<h2>" + data[i].techno.join(" / ") + " </h2>";
}

document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;

    case "php":
      document.body.style.background = "blue";
      break;

    case "python":
      document.body.style.background = "red";
      break;
    default:
      null;
  }
});
