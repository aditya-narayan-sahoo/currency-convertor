import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const response = await result.json();
        setData(response?.currency);
      } catch (err) {
        console.error("Error fetching currency data: ", err);
      }
    };
    fetchData();
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrencyInfo;
