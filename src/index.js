const menuItems = {
    Pizza: 3,
    hotdogs: 4,
    cheeseburger: 10
}

const lunchMenu = {
    ...menuItems,
    chicken_soup: 10,
    tacos: 30,
    fish_dip: 15
}

console.log(lunchMenu)
console.log(menuItems)