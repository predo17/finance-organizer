import { formatToReadable } from "../utils/formatAmount";

function Balance({ income, expense }) {
    const total = income - expense;

    return (
        <div className="bg-white rounded-lg shadow py-4 px-6 flex flex-col max-sm:gap-4 sm:flex-row justify-between items-center">
            <div className="flex-1 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                    <i className="bi bi-arrow-up-circle text-green-600 text-xl"></i>
                    <p className="text-gray-500 font-medium">Entradas</p>
                </div>
                <p className="font-bold text-lg">R$ {formatToReadable(income)}</p>
            </div>

            <hr className="w-full m-1 text-gray-300 hidden max-sm:block" />

            <div className="flex-1 flex flex-col items-center sm:border-x border-gray-300 ">
                <div className="flex items-center gap-2 mb-1">
                    <i className="bi bi-arrow-down-circle text-red-500 text-xl"></i>
                    <p className="text-gray-500 font-medium">Saídas</p>
                </div>
                <p className="font-bold text-lg">R$ {formatToReadable(expense)}</p>
            </div>

            <hr className="w-full m-1 text-gray-300 hidden max-sm:block" />

            <div className="flex-1 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                    <i className="bi bi-currency-dollar text-blue-600 text-xl"></i>
                    <p className="text-gray-500 font-medium">Saldo</p>
                </div>
                <p className="font-bold text-xl">R$ {formatToReadable(total)}</p>
            </div>
        </div>
    );

}

export default Balance;
