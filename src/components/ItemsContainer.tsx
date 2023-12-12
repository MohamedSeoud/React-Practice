import ItemDetails from "./ItemDetails"



export interface User{
    name:string,
    image:string,
    description:string,
    budget:number
}


function ItemsContainer({items}:{items:User[]}) {
  return (
    <div className="bg-orange-50 flex flex-col sm:p-5 gap-4 w-[100%]">
        {
            items.map((item:User,index)=> <ItemDetails key={index} user={item}/>)
        }
      
    </div>
  )
}

export default ItemsContainer
