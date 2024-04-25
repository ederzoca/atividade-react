/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { action } from "../../src/services/ShareServiceAPI";
import { ShareRequest } from "../../src/interfaces/ShareRequest";
import "./ShareComponent.css";

const ShareComponent: React.FC<ShareRequest> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        action (symbol)
        .then((response) => {
          setShareData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [symbol]);
    if (loading) return <div> Loading ...</div>;
    if (error) return <div> Error: {error}</div>;

    return (
      <>
      <div className="card">
        <img src={share?.logourl} alt={`${share?.shortName} Logo`} width={100} />
        <h1>{share?.shortName}</h1>
        <p>{share?.longName}</p>
        <p>Simbolo: {share?.symbol}</p>
        <p>Moeda: {share?.currency}</p>
        <p>Preço: {share?.priceEarnings?.toFixed(2)}</p>
        <p>Lucro por ação: {share?.earningsPerShare?.toFixed(2)}</p>
    </div>
      </>
    );
  };

  export default ShareComponent;  