import { useState, useEffect } from "react";

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        try {
            const savedItems = localStorage.getItem("items");
            if (savedItems) {
                setItems(JSON.parse(savedItems) || []);
            }
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            setItems([]);
        }
    }, []);

    // Group items by name and count occurrences
    const itemCounts = items.reduce((acc, item) => {
        if (acc[item.name]) {
            acc[item.name].count += 1;
        } else {
            acc[item.name] = { ...item, count: 1 };
        }
        return acc;
    }, {});

    const totalCartPrice = Object.values(itemCounts).reduce(
        (total, item) => total + item.price * item.count,
        0
    );

     // Function to add an item (increase quantity if it already exists)
     const addItem = (itemName) => {
        // Find the item from `items` to add
        const itemToAdd = items.find((item) => item.name === itemName);
        if (itemToAdd) {
            const updatedItems = [...items, itemToAdd]; // Add one more of the same item
            setItems(updatedItems);
            localStorage.setItem("items", JSON.stringify(updatedItems));
        }
    };

    // Function to remove an item (decrease quantity, remove if count is 0)
    const subItem = (itemName) => {
        let updatedItems = [...items];
        const itemIndex = updatedItems.findIndex((item) => item.name === itemName);

        if (itemIndex !== -1) {
            if (updatedItems[itemIndex].count > 1) {
                // Reduce count if greater than 1
                updatedItems[itemIndex].count -= 1;
            } else {
                // Remove item if count is 1
                updatedItems.splice(itemIndex, 1);
            }
        }

        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };
    
    return (
        <div className="w-screen min-h-screen">
            <h2 className="text-2xl font-bold text-center">
                Cart ({items.length} items)
            </h2>
            {items.length > 0 ? (
                <>
                    <ul className="text-center text-2xl font-semibold">
                        {Object.values(itemCounts).map((item, index) => (
                            <li key={index} className="text-black">
                                {item.name} - Rs {item.price} (x{item.count}) = Rs {item.price * item.count}
                                <button onClick={() => addItem(item.name)} className="ml-4 mt-2 px-2 py-1 bg-blue-500 text-white rounded">
                                    +
                                </button>
                                <button onClick={() => subItem(item.name)} className="ml-4 px-2 py-1 bg-blue-500 text-white rounded">-</button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-bold text-center mt-4">
                        Total Price: Rs {totalCartPrice}
                    </h3>
                </>
            ) : (
                <p className="text-black text-center">Cart is empty</p>
            )}
        </div>
    );
};

export default Cart;
