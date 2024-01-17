import React from 'react';
import Frag2 from './Frag2';

function Frag1()
{
    const user=[
        {Id:"01",Nmae:"Pankaj",Email:"pankaj@gmail.com"},
        {Id:"02",Nmae:"Alok",Email:"alok@gmail.com"},
        {Id:"03",Nmae:"Rinku",Email:"rinku@gmail.com"},
        {Id:"04",Nmae:"Keyur",Email:"keyur@gmail.com"}
]

    return(
        <div>
            {
                user.map((items)=><Frag2 data={items}/>)
            }
        </div>
    )
}
export default Frag1;