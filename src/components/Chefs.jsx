// eslint-disable-next-line no-unused-vars
import React from 'react'
import Chefcard from './Chefcard'

const Chefs = () => {
    const chefs = [
        {
            name: "Juan Perez",
            img: "images/avg.png",
            recipes: "10",
            cuisines: "Mexican"
        },
        {
            name: "David Smith",
            img: "images/avg.png",
            recipes: "25",
            cuisines: "American"
        },
        {
            name: "Santiago Rodriguez",
            img: "images/avg1.png",
            recipes: "13",
            cuisines: "Italian"
        },
        {
            name: "Rafael Gonzalez",
            img: "images/avg.png",
            recipes: "15",
            cuisines: "Nepalese"
        },
        {
            name: "Wei Chen",
            img: "images/avg.png",
            recipes: "9",
            cuisines: "Chinese"
        },
        {
            name: "Ajay Patel",
            img: "images/avg.png",
            recipes: "19",
            cuisines: "Indian"
        }
    ];
    
  return (
   <main>
    <div className='chefs'>
        <h1 className='Meet'>Meet Our Culinary Masters</h1>
        <div className='chef-grids'>
       {chefs.map((chef) => (
        <Chefcard key={chef.name} chef={chef} />
       ))}
       </div>
    </div>
   </main>
  )
}

export default Chefs