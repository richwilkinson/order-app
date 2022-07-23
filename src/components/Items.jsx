import { useState } from "react"

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



const Items = () => {
    const [item, setItem] = useState({})
    return (
        <div>
            <h3>Available Items</h3>
            <button onClick={() => setItem(menuItems)}>Menu Items</button>
            <button onClick={() => setItem(lunchMenu)}>Lunch Specials</button>

            <ul>
                {Object.keys(item).map((material) => (
                    <li key={material}>
                        {material}: {item[material]}

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Items