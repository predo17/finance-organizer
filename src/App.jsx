
import Balance from "./components/Balance";
import useLocalStorage from "./hooks/useLocalStorage";
import ChartBox from "./components/ChartBox";
import TransactionSection from "./components/TransactionSection";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function App() {

  const [transactions, setTransactions] = useLocalStorage("finance-data", []);

  const handleAddTransaction = (transaction) => {
    const totalEntradas = transactions
      .filter((t) => t.type === "entrada")
      .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

    const totalSaidas = transactions
      .filter((t) => t.type === "saida")
      .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

    const saldoAtual = totalEntradas - totalSaidas;

    if (
      transaction.type === "saida" &&
      parseFloat(transaction.amount) > saldoAtual
    ) {
      toast.error("Saldo Insuficiente");
      return;
    }

    setTransactions([transaction, ...transactions]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Limpa todas as transações com sweetalert2
  const handleClearAll = () => {
    Swal.fire({
      title: "Limpar todas as finanças?",
      text: "Essa ação não pode ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, limpar tudo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setTransactions([]);
        toast.success("Todas as finanças foram apagadas com sucesso!");
      } 
    });


  };

  const income = transactions
    .filter((t) => t.type === "entrada")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "saida")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-700 text-white py-4 px-6 shadow">
        <h1 className="text-xl md:text-2xl font-bold text-center">Organizador de Finanças</h1>
      </header>
      <div className="px-2 py-6">
        <Balance income={income} expense={expense} />
        <main className="grid grid-cols-1 xl:grid-cols-2 gap-6 mx-auto py-6">
          <ChartBox transactions={transactions} />
          <TransactionSection
            transactions={transactions}
            setTransactions={setTransactions}
            onAdd={handleAddTransaction}
            onDelete={handleDeleteTransaction}
            onClear={handleClearAll}
          />
          <ToastContainer position="top-right" autoClose={3000} />
        </main>
      </div>
    </div>
  );
}

export default App;
