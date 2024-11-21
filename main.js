// let container = document.querySelector(".container");
// function getArray() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     }, 500);
//   });
// }

// function getString() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["1", "2", 3, 4, 5, 6, 7, 8, 9, 10]);
//     }, 500);
//   });
// }

// function getImg() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     }, 500);
//   });
// }

// Promise.allSettled([getImg(), getArray(), getString()]).then((array) => {
//   console.log(array);
//   let creatediv = document.createElement("div");
//   creatediv.innerHTML = array[0].value.join("br");
//   creatediv.innerHTML += array[1].value.join("<br>");
//   creatediv.innerHTML += array[2].value.join("<br>");
//   container.append(creatediv);
// });

const output = document.getElementById("output");

const logResult = (title, result) => {
  const entry = document.createElement("div");
  entry.classList.add("entry");
  entry.innerHTML = `<strong>${title}:</strong>`;
  if (Array.isArray(result)) {
    result.forEach((item) => {
      if (typeof item === "string" && item.startsWith("https://")) {
        const img = document.createElement("img");
        img.src = item;
        entry.appendChild(img);
      } else {
        const text = document.createElement("p");
        text.textContent = item;
        entry.appendChild(text);
      }
    });
  } else {
    const text = document.createElement("p");
    text.textContent = JSON.stringify(result, null, 2);
    entry.appendChild(text);
  }
  output.appendChild(entry);
};

const firstPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(Array.from({ length: 10 }, (_, i) => `Data-${i + 1}`));
  }, 1000);
});

firstPromise.then((result) => {
  logResult("Promise 1 natijasi", result);
  console.log(result);
});

const secondPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(Array.from({ length: 10 }, (_, i) => `String-${i + 1}`));
  }, 1500);
});

secondPromise.then((result) => {
  logResult("Promise 2 natijasi", result);
  console.log(result);
});

const thirdPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(
      Array.from(
        { length: 10 },
        () =>
          "https://avatars.mds.yandex.net/i?id=a98854f2c187a14ce2f841a38810d3c9d5c0c7c1-8340358-images-thumbs&n=13"
      )
    );
  }, 2000);
});

thirdPromise.then((result) => {
  logResult("", result);
  console.log(result);
});

const promises = [firstPromise, secondPromise, thirdPromise];
