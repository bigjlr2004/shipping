import { ListDocks } from "./listDocks.js";
import { ListHaulers } from "./ListHaulers.js";
import { ListShippingShips } from "./ListShippingShips.js";

const mainContainer = document.querySelector(".rightHere");

const applicationHTML = `
<h1>WORLD WIDE SHIPPING</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>DOCKS</h2>
        ${ListDocks()}
    </section>
    <section class="detail--column list details__cities">
        <h2>HAULERS</h2>
        ${ListHaulers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>SHIPS</h2>
        ${ListShippingShips()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    
</article>
`;

mainContainer.innerHTML = applicationHTML;
