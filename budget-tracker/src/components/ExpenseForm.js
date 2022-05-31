import React, {useState} from 'react'

function ExpenseForm({onSubmitExpense}) {

  const [ formData, setFormData ] = useState({name:"", category:"", amount:""})

  function handleChange(e){
    let key=e.target.name
    let value=e.target.value
    setFormData((formData)=>({...formData, [key]:value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:4000/expenses`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        },
      body:JSON.stringify(formData),
    })
        .then(res=>res.json())
        .then(newExpense=>onSubmitExpense(newExpense))
    setFormData({name:"", category:"", amount:""})
  }
  return (
    <div id="home">
      {/* <h1 style={{ color: "firebrick" }}> */}
        <form className="new-form" onSubmit={handleSubmit}>
          <input placeholder="Name.." name="name" value={formData.name} onChange={handleChange}/>
          <input placeholder="Category.." name="category" value={formData.category} onChange={handleChange}/>
          <input placeholder="Amount.." name="amount" value={formData.amount} onChange={handleChange}/>
          <input type="submit" value="Add Expense" />
        </form>
      {/* </h1> */}
    </div>
  )
}

export default ExpenseForm