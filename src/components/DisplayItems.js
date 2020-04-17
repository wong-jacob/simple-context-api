import React, { useContext } from "react";
import Item from "./Item";
import { MarketContext } from "../MarketContext";

export default function DisplayItems(props) {
    const [marketState] = useContext(MarketContext);

    // Cannot have if-else in JSX
    if (!marketState.items) {
        return (
        <div>
        <p>No Items to display</p>
        </div>
        )
    } else {
        return (
        <div>
            <p>Display items</p>
            <table>
            <thead>
                <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Weight (kg)</th>
                </tr>
            </thead>
            <tbody>
                {marketState.items.map((item) => (
                    <Item
                    key={item.id}
                    item={item}
                    selections={marketState.selections}
                    updateSelections={props.updateSelections}
                    />
                ))}
            </tbody>
            </table>
        </div>
        );
    }
}
