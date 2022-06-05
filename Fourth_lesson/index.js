///Task 1
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
  return this.price * 0.85;
};

class Product2 {
  constructor(name, price) {
    this.price = price;
    this.name = name;
  }
  make25PercentDiscount() {
    return this.price * 0.85;
  }
}

const Cookie2 = new Product2("cookie", 20);
const Cookie = new Product("cookie", 20);

console.log("es5: ", Cookie.price);
console.log("es5: ", Cookie.make25PercentDiscount());
console.log("es6: ", Cookie.price);
console.log("es6: ", Cookie.make25PercentDiscount());

///Task 2
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (str) {
  this.text = str;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

const atchPost = new AttachedPost("user", "dog alive, wow", "today");
const post = new Post("admin", "cat attack dog, wow", "tommorow");

console.log(post);
console.log(atchPost);
post.edit("edited text, wp");
atchPost.makeTextHighlighted();
atchPost.edit("Changed okey");
console.log("after: ", post);
console.log("after: ", atchPost);
