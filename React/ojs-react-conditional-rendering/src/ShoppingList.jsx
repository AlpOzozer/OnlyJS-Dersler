const list = [
        {
            name: "Ekmek",
            isAddedToCart: true,
        },
        {
            name: "Su",
            isAddedToCart: true,
        },
        {
            name: "Çikolata",
            isAddedToCart: false,
        },
        {
            name: "Domates",
            isAddedToCart: false,
        },
    ];

export function ShoppingList() {
    return (
        <div>
            <p>Alınacaklar listesi:</p>
            <ul>
                {list.map((item, index) => (
                    <ShoppingListItem 
                    key={index}
                     name={item.name} 
                     isAddedToCart={item.isAddedToCart}
                    />
                ))}
            </ul>
        </div>
    );
}

function ShoppingListItem({ name, isAddedToCart }) {
    //const symbol = isAddedToCart ? "✅" : "❌";

    return(
        <li>
            {name} {isAddedToCart && "✅"}
        </li>
    )
}