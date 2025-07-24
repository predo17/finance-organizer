import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("entrada");

  const handleSubmit = (e) => {
    e.preventDefault();

    const rawAmount = parseFloat(amount);
    if (!rawAmount || isNaN(rawAmount)) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: rawAmount,
      type,
      date: new Date().toLocaleDateString("pt-BR"),
    };

    onAdd(newTransaction);
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow flex max-xl:flex-col h-full gap-6"
      >
        <div>
          <label className="block text-gray-600 mb-1">Descrição</label>
          <input
            type="text"
            name="description"
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ex: Salário, Mercado..."
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Valor (R$)</label>
          <input
            type="number"
            step="0.01"
            min="0"
            className="w-full border p-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Tipo</label>
          <select
            name="type"
            className="w-full border p-2 rounded cursor-pointer"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>

        <div className="mx-auto max-xl:w-full flex">
          <button
            type="submit"
            className="bg-purple-600 text-white rounded-lg w-full px-6 max-xl:py-2 cursor-pointer hover:bg-purple-700 transition-all duration-500"
          >
            Adicionar Transação
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
