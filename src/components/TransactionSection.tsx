// TransactionSection.tsx
import { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function TransactionSection({ transactions, onAdd, onDelete, onClear }) {

    return (
        <section className="space-y-6">
            {/* Formulário */}
            <TransactionForm onAdd={onAdd} />

            <TransactionList
                transactions={transactions}
                onDelete={onDelete}
            />
            {transactions.length > 0 && (
                <div className="text-center">
                    <button
                        onClick={onClear} 
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
                    >
                        Limpar Finanças
                    </button>
                </div>
            )}

        </section>
    );
}

export default TransactionSection;
