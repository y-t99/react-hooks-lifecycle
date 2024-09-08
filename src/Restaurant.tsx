import consola from "consola";
import { useState } from "react";

function Restaurant() {
  const [order, setOrder] = useState<string | null>(null);
  if (order) {
    consola.info("The trigger reason: The component’s (or one of its ancestors’) state has been updated.");
    consola.box("React preparing the order in the kitchen...", order);
    return (
      <div>
        <p>The Waiter has placed the order on the table.</p>
      </div>
    )
  } else {
    consola.info("The trigger reason: It’s the component’s initial render.");
    consola.box("The waiter perparing the munu on the table for customer...");
    return (
      <div>
        <span>Customer: </span><button onClick={() => setOrder("Pizza")}>Submit Order: "Pizza"</button>
      </div>
    );
  }
}

export default Restaurant;