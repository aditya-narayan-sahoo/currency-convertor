import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) => {
  const amoutnInputId = useId();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col">
      <label
        htmlFor={amoutnInputId}
        className="text-gray-700 mb-2 inline-block font-semibold"
      >
        {label}
      </label>
      <input
        id={amoutnInputId}
        type="number"
        placeholder="Amount"
        className="outline-none w-full bg-transparent border border-gray-300 rounded-lg py-2 px-3 mb-2 focus:border-blue-500 transition duration-200"
        disabled={amountDisable}
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
      <p className="text-gray-600 mb-1">Currency Type</p>
      <select
        className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-100 cursor-pointer outline-none transition duration-200 hover:bg-gray-200 focus:border-blue-500"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.map((curr) => (
          <option key={curr} value={curr}>
            {curr.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;
