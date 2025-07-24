import { formatToReadable } from "../utils/formatAmount";

function TransactionItem({ transaction, onDelete }) {
  const { id, description, amount, type, date } = transaction;
  const color = type === "entrada" ? "text-green-600" : "text-red-500";
  const prefix = type === "entrada" ? <i className= "bi bi-arrow-up-circle"></i> : <i className="bi bi-arrow-down-circle"></i>;

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-medium max-sm:truncate max-[320px]:w-20">{description}</p>
        <small className="text-gray-500">{date}</small>
      </div>
      <div className="flex items-center gap-3">
        <p className={`font-bold ${color}`}>
          {prefix} R$ {formatToReadable(amount)}
        </p>
        <button
          onClick={() => onDelete(id)}
          className="text-sm cursor-pointer"
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
