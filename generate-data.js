const casual = require("casual");
const fs = require("fs");

const randomCategoryList = (n) => {
  if (n <= 0) return [];
  const categoryList = [];

  Array.from(new Array(n)).forEach(() => {
    const category = {
      id: casual.uuid,
      name: casual.company_name,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    categoryList.push(category);
  });
  return categoryList;
};

const randomProductList = (categoryList, numberOfProducts) => {
  if (numberOfProducts <= 0) return [];

  const productList = [];
  //random data
  for (const category of categoryList) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      const product = {
        categoryId: category.id,
        id: casual.uuid,
        name: casual.name,
        color: casual.color_name,
        price: casual.price,
        description: casual.description,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        thumnailUrl:
          "https://w7.pngwing.com/pngs/750/189/png-transparent-white-and-red-air-jordan-1-shoe-illustration-jumpman-air-jordan-drawing-shoe-sneakers-running-shoes-white-outdoor-shoe-sports-thumbnail.png",
      };
      productList.push(product);
    });
  }
  return productList;
};

(() => {
  //random data
  const categoryList = randomCategoryList(5);
  const productList = randomProductList(categoryList, 5);

  const db = {
    categories: categoryList,
    products: productList,
    profile: {
      name: "Just",
    },
  };

  // write db object to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
