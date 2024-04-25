import React, { ChangeEvent, useState } from "react";
import "../../pages/shares/SharePage.css";
import ShareComponent from "../../components/ShareComponent";

const Shares = () => {
  const [symbol, setSymbol] = useState("");

  const handleSymbolChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSymbol(event.target.value); 
  };

  return (
      <div className="page-container"> {}
          <div className="shares-container">
              <input 
                  type="text" 
                  value={symbol} 
                  onChange={handleSymbolChange} 
                  placeholder="Código da ação" 
                  className="symbol-input" 
              />
              <ShareComponent key={symbol} symbol={symbol} />
          </div>
      </div>
  );
};

export default Shares;
