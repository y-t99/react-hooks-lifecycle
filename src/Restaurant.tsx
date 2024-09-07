import { useState } from "react";

function Restaurant() {
  const [order, setOrder] = useState<string | null>(null);
  if (order) {
    console.log("React preparing the order in the kitchen...", order);
    return (
      <div>
        <h2>React Restaurant</h2>
        <p>The Waiter has placed the order on the table.</p>
      </div>
    )
  }
  return (
    <div>
      <h2>React Restaurant</h2>
      <span>Customer: </span><button onClick={() => setOrder("Pizza")}>Submit Order: "Pizza"</button>
    </div>
  );
}

export default Restaurant;