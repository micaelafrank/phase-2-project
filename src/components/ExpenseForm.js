import React, {useState, useEffect} from 'react'
import BorderGif from './BorderGif'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function ExpenseForm({onSubmitExpense}) {
  const [ formData, setFormData ] = useState({name:"", category:"", amount:0, image:"", day:"1"})
  const [ paycheck, setPaycheck ] = useState(false)
  const history = useHistory();

  function handleChange(e){
    let key=e.target.name
    let value= e.target.type==='number' ? parseFloat(e.target.value): e.target.value
    setFormData((formData)=>({...formData, [key]:value}))
  }
  function handleSubmit(e){
    e.preventDefault()
    let newFormData={}
    paycheck? newFormData={...formData, "amount":formData.amount*-1}: newFormData=formData
    fetch(`http://localhost:4000/expenses`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        },
      body:JSON.stringify(newFormData),
    })
        .then(res=>res.json())
        .then(newExpense=>onSubmitExpense(newExpense))
        setFormData({name:"", category:"", amount:0, image:"", day:"1"})
        history.push('/expenselist')
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

    const days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    const daysOption=days.map((day)=><option key={day} value={day}>{day}</option>)
    return (
      <div id="home">
            <BorderGif/>
            <h1 className="formHeading">Add Your Two Cents</h1>
            <button id="formButton" onClick={()=>setPaycheck(false)}>Submit an expense</button>
            <button id="formButton" onClick={()=>setPaycheck(true)}>Submit a paycheck</button>
            <form id="formHome"className={paycheck?"new-form-paycheck":"new-form"} style={{backgroundColor: paycheck? "#ccffcf" : "#ffcdc9"}} onSubmit={handleSubmit}>
              <h2 style={{ width:"300px", fontFamily:"Open Sans", letterSpacing:"-2px", fontSize:"33px", color: paycheck?"rgb(79, 160, 100)":"firebrick" }}>{paycheck?"Add A Paycheck":"Submit An Expense"}</h2>
              <label>NAME:</label>
              <input required className="inputText" placeholder="Name.." name="name" value={formData.name} onChange={handleChange}/>
              <label>CATEGORY:</label>
              <input required className="inputText" placeholder="Category.." name="category" value={formData.category} onChange={handleChange}/>
              <label>AMOUNT:</label>
              <input required className="inputText" placeholder="Amount.." name="amount" value={formData.amount} type="number" onChange={handleChange}/>
              <label>IMAGE:</label>
              <input className="inputText" placeholder="Image.." name="image" value={formData.image} onChange={handleChange}/>
              <label>SELECT DAY OF MONTH:</label>
              <select required style={{ lineHeight:"50px" }} name="day" value={formData.day} onChange={handleChange}>
                {daysOption}
              </select>
              <input id="submit" style={{ color:"white", backgroundColor:paycheck?"rgb(79, 160, 100)":"firebrick", lineHeight:"50px", marginTop: "20px"}} type="submit" value={paycheck?"ADD PAYCHECK":"ADD EXPENSE"} />
            </form>
            <nav className="homeNav">
              <NavLink className='link-button' exact to="/">Return to homepage</NavLink>
            </nav>
        </div>
      )
}
export default ExpenseForm