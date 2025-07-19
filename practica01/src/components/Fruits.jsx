import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["apple", "banana", "cherry"];
  const fruits = [
    { name: "apple", price: 10, emoji: "🍎" },
    { name: "banana", price: 20, emoji: "🍌" },
    { name: "cherry", price: 30, emoji: "🍒" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
