import React, {useState} from 'react'
function ExpenseForm({onSubmitExpense}) {
  const [ formData, setFormData ] = useState({name:"", category:"", amount:"", image:"", day:"1"})
  function handleChange(e){
    let key=e.target.name
    let value= e.target.type==='number' ? parseFloat(e.target.value) : e.target.value
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
    setFormData({name:"", category:"", amount:"", image:"", day:"1"})
  }
console.log(formData)
    const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    const daysOption=days.map((day)=><option key={day} value={day}>{day}</option>)
    return (
      <div id="home">
            <h1 style={{ color: "firebrick" }}>Add New Expense</h1>
            <form className="new-form" onSubmit={handleSubmit}>
              <label>Name:</label>
              <input className="inputText" placeholder="Name.." name="name" value={formData.name} onChange={handleChange}/>
              <label>Category:</label>
              <input className="inputText" placeholder="Category.." name="category" value={formData.category} onChange={handleChange}/>
              <label>Amount:</label>
              <input className="inputText" placeholder="Amount.." name="amount" value={formData.amount} type="number" onChange={handleChange}/>
              <label>Image:</label>
              <input className="inputText" placeholder="Image.." name="image" value={formData.image} onChange={handleChange}/>
              <label>Select day of the month:</label>
              <select name="day" value={formData.day} onChange={handleChange}>
                {daysOption}
              </select>
              <input id="submit" style={{ marginTop: "20px"}} type="submit" value="Add Expense" />
            </form>
        </div>
      )
}
export default ExpenseForm