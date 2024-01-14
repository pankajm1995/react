
function Table()
{
    const arr=[
        {name:"Pankaj",lastName:"Maurya",contact:+916391754931,email:"pankaj525@gamil.com"}
    ]
    return(
       <div>
                <h1 style={{color:"purple"}}>Array List using map function</h1>
                   <div>
                   <table border="7px 5px 1px" color="yellow" cellSpacing="13px"cellPadding="5px" className="App" style={{backgroundColor:"violet"}}>
                   {
                       arr.map((items)=>
                       <div>
                       <tr>
                       <td>Name</td>
                       <td>LastName</td>
                       <td>Contact</td>
                       <td>Email</td>
                       </tr>
                       <tr>
                        <td>{items.name}</td>
                        <td>{items.lastName}</td>
                        <td>{items.contact}</td>
                        <td>{items.email}</td>
                       </tr>
                       </div>
                       )
                       
                   }
               </table>
                   
       </div>
      </div>
    )
}
export default Table;