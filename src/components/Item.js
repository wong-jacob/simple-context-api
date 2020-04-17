import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MarketContext } from "../MarketContext";

export default function Item(props) {
  const [marketState, setMarketState] = useContext(MarketContext);
  var {item} = props;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.unit}</td>
      <td>
        <input
          type="text"
          name="weight"
          placeholder="purchase weight"
          value={marketState.selections
            .filter((select) => select.id === item.id)
            .map((select) => select.weight)}
          onChange={(e) => updateSelections(marketState, setMarketState, item.id, e.target.value)}
        />
      </td>
    </tr>
  );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

function updateSelections(marketState, setMarketState, id, weight) {
  // Update the state using the prevState passed in by setState().
  setMarketState((prevState, props) => {
    let selection = prevState.selections.find((selection) => selection.id === id);
    if (selection) {
      // Construct the updated state using spread operation
      return { ...prevState, 
               ...{selections:  prevState.selections.map((selection) =>
                   selection.id === id ? { id, weight: (+weight) } : selection
        )} };
    } else {
      // Construct the updated state using spread operation
      return {...prevState, ...{selections: [ ...prevState.selections, {id, weight: (+weight) } ]}};
    }
  });
};