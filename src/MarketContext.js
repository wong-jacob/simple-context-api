import React, {useState, createContext} from 'react'
import Axios from "axios"

const initState = {
    items: [
      {
        id: 1,
        name: "apple",
        price: "1.00",
        unit: "$/kg",
      },
      {
        id: 2,
        name: "orange",
        price: "5.00",
        unit: "$/kg",
      },
    ],
    selections: [
      {
        id: 1,
        weight: 0.5,
      }
    ]
  };

export const MarketContext = createContext();


export const MarketProvider = ({children}) => {
    const [marketState, setMarketState] = useState(initState);
    
    // This will get into an infinite loop because of the setState()
    //   Getting state information from external rest API.
    // Axios.get("https://my-json-server.typicode.com/wong-jacob/json/fruitMarket")
    //     .then(res => setMarketState(res.data));
    // console.log("Updating using axios");      

    return (
        <MarketContext.Provider value={[marketState, setMarketState]}>
            {children}
        </MarketContext.Provider>
    )

}