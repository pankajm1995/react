
function Table()
{
    const arr=[
        {name:"Pankaj",lastName:"Maurya",contact:+916391754931,email:"pankaj525@gamil.com"}
    ]
    return(
       <div>
                <h1>Array List using map function</h1>
                   <div>
                   <table border="3px">
                   {
                       arr.map((items)=>
                       <div>
                       <tr>
                       <td>Name</td>
                       <td>Last Name</td>
                       <td>Contact</td>
                       <td>Email</td>
                       </tr>
                       <tr>
                        <td>{items.name},{items.lastName},{items.contact},{items.email}</td>
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