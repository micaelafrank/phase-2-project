EXPENSE-ITEM

const [itemToSplit, setSplit] = useState(false);

function toggleSplitPrice(){
    setSplit(itemToSplit => (!itemToSplit));
}

  function handleAmount(){
    const splitPrice = {
      amount: amount / 2,
    };

    fetch(`http://localhost:4000/expenses/${id}`,{
      method: "PATCH",
      headers: {"Content-Type":"application/json" },
      body: JSON.stringify(splitPrice),
    })
    .then(res=>res.json())
    .then(handleSplitPrice);
    }

    APP: 
    function handleSplitPrice(itemToSplit){
        const updatedList = expenses.map((expense) => expense.id === itemToSplit.id ? itemToSplit : expense );
        setExpenses(updatedList);
    }

    <button onClick={({toggleSplitPrice}) ? ({itemToSplit} * 2) : ({handleAmount})}>Split cost</button>
