const URL = "https://api.pexels.com/v1/search?query=";
// const URL2 = "https://api.pexels.com/v1/search?query=dog";
const firstURL = function (query) {
  fetch(URL + query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "7A7jWAwS7BV74wkK7G6aiDg35JnoDknw6DW93xtwISeyarnoRFh5ILaB",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Errore nella fetch");
      }
    })
    .then((imgCard) => {
      console.log(imgCard);

      const row = document.querySelector(".gatti");
      row.innerHTML = "";
      imgCard.photos.forEach((element) => {
        const col = document.createElement("col");
        col.classList.add("col", "col-md-4");

        const card = document.createElement("card");
        card.classList.add("card", "mb-4", "shadow-sm");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = element.src.small;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = element.alt;

        const div = document.createElement("div");
        div.classList.add(
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );

        const divBtn = document.createElement("div");
        divBtn.classList.add("btn-group");

        const button1 = document.createElement("button");
        button1.classList.add("btn", "btn-sm", "btn-outline-secondary");
        button1.innerText = "HIDE";
        button1.addEventListener("click", function () {
          col.remove();
        });

        const button2 = document.createElement("button");
        button2.classList.add("btn", "btn-sm", "btn-outline-secondary");
        button2.innerText = "VIEW";

        const small = document.createElement("small");
        small.classList.add("imgID");
        small.innerText = element.id;

        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(div);
        div.appendChild(divBtn);
        div.appendChild(small);
        divBtn.appendChild(button1);
        divBtn.appendChild(button2);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
};
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
  firstURL("cat");
});

// const secondURL = function () {
//   fetch(URL2, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "7A7jWAwS7BV74wkK7G6aiDg35JnoDknw6DW93xtwISeyarnoRFh5ILaB",
//     },
//   })
//     .then((resp) => {
//       if (resp.ok) {
//         return resp.json();
//       } else {
//         throw new Error("Errore nella fetch");
//       }
//     })
//     .then((imgCard) => {
//       console.log(imgCard);

//       const row = document.querySelector(".cani");

//       imgCard.photos.forEach((element) => {
//         const col = document.createElement("col");
//         col.classList.add("col", "col-md-4");

//         const card = document.createElement("card");
//         card.classList.add("card", "mb-4", "shadow-sm");

//         const img = document.createElement("img");
//         img.classList.add("card-img-top");
//         img.src = element.src.small;

//         const cardBody = document.createElement("div");
//         cardBody.classList.add("card-body");

//         const h5 = document.createElement("h5");
//         h5.classList.add("card-title");
//         h5.innerText = element.alt;

//         const div = document.createElement("div");
//         div.classList.add(
//           "d-flex",
//           "justify-content-between",
//           "align-items-center"
//         );

//         const divBtn = document.createElement("div");
//         divBtn.classList.add("btn-group");

//         const button1 = document.createElement("button");
//         button1.classList.add("btn", "btn-sm", "btn-outline-secondary");
//         button1.innerText = "HIDE";

//         button1.addEventListener("click", function () {
//           col.remove();
//         });
//         const button2 = document.createElement("button");
//         button2.classList.add("btn", "btn-sm", "btn-outline-secondary");
//         button2.innerText = "VIEW";

//         const small = document.createElement("small");
//         small.classList.add("imgID");
//         small.innerText = element.id;

//         col.appendChild(card);
//         card.appendChild(img);
//         card.appendChild(cardBody);
//         cardBody.appendChild(h5);
//         cardBody.appendChild(div);
//         div.appendChild(divBtn);
//         div.appendChild(small);
//         divBtn.appendChild(button1);
//         divBtn.appendChild(button2);
//         row.appendChild(col);
//       });
//     })
//     .catch((err) => console.log(err));
// };
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function () {
  firstURL("dog");
});
