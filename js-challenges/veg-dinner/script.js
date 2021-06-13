//In this challenge you're planning the menu for an Italian dinner.
//Some of your guests are vegetarian and you need to create a list of vegetarian menu items for them.
//Given an array of Italian dishes, create an unordered list of all vegetarian dinner options.
//Each menu item is an object containing the dish name and a Boolean variable that indicates whether the dish is vegetarian.
//you should dynamically generate the list items in the DOM from the array of vegetarian items

function vegetarianMenu(menu) {
  const menuNode = document.querySelector("#menu");
  //  to create a new array for vegetarian dinner options
  const vegetarianOptions = menu.filter(
    (option) => option.isVegetarain === true
  );
  //   to dynamically add the veg dishes
  vegetarianOptions.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  });
}

const menu = [
  { name: "sambar", isVegetarian: true },
  {
    name: "chicken rice",
    isVegetarian: false,
  },
  {
    name: "sphagetti",
    isVegetarian: true,
  },
];
vegetarianMenu(menu);
