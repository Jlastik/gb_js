// First task

const checkNumber = (num) => {
  if (num === 0) {
    console.log("Это ноль");
    return;
  }
  if (num % 2 === 0) {
    console.log("Четное число");
    return;
  }
  if (num % 2 != 0) {
    console.log("Нечетное число");
    return;
  }
};

for (let i = 0; i < 11; i++) {
  checkNumber(i);
}

// Second task

const post = {
  author: "John", //вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, //вывести это число
      },
    },
    {
      userId: 5, //вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", //вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Third task
const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach((item, i) => (products[i].price = item.price * 0.85));

console.log("Products: ", products);

// Fourth task

const prod = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const prodWithImg = prod.filter((item) => item.photos?.length > 0);

const sortedProducts = prod.sort((a, b) => sortFunction(a, b));

function sortFunction(a, b) {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  if (a.price === b.price) {
    return 0;
  }
}
console.log("Products with images: ", prodWithImg);

console.log("Sorted products: ", sortedProducts);

// Fifth task

const fun = (i) => {
  console.log("Number: ", i);
};

for (let i = 0; i < 10; fun(i), i++) {}

//Sixth task

let tempVar = "";
const mountSize = 20;

for (let i = 1; i <= mountSize; i++) {
  for (let j = 1; j <= i; j++) {
    tempVar += "x";
  }
  console.log(tempVar);
  tempVar = "";
}
