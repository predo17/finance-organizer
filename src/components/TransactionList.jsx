import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">Nenhuma transação registrada.</p>
    );
  }

  return (

    <div className="bg-white rounded-lg shadow p-4 max-h-70 overflow-y-auto">
      <ul>
        {transactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
        ))}

         {/* Exemplo de como poderia ser usado para exibir transações diretamente */}
         {/* {transactions.map((t) => (
          <li key={t.id} className="flex justify-between p-2 border-b">
            <span>{t.description} - R$ {t.amount} ({t.type})</span>
            <button onClick={() => onDelete(t.id)} className="text-red-500">Remover</button>
          </li>
        ))}  */}

      </ul>
    </div>

    // <div className="bg-white rounded-lg shadow p-4 h-full max-h-40 overflow-y-auto">
    //   <h2 className="text-lg font-semibold mb-4">Histórico de Transações</h2>
    //   {transactions.map((t) => (
    //     <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
    //   ))}
    // </div>
  );
}

export default TransactionList;
