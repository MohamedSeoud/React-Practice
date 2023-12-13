import { useState } from "react"
import Button from "../components/Button"
import { FaRegStar, FaStar } from "react-icons/fa";

import FormComponent, { UserData } from "../components/FormComponent"
import ItemsContainer, { User } from "../components/ItemsContainer"

const items:User[]=[
  {name:'Mohamed',
  image:'https://e0.pxfuel.com/wallpapers/180/633/desktop-wallpaper-tiktok-boys-hot-tiktok-2020-thumbnail.jpg',
  description:'',
  budget:100},
  {name:'Seif',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwdqUY02jXQ9J7OZTNLkdO-0G2r4qST8yFYcE4Ze-0czI9W09d_H8ctmWHEzyy49l22w&usqp=CAU',
  description:'',
  budget:100},
  {name:'Hossam',
  image:'https://i.pinimg.com/236x/ee/89/30/ee8930792c682a6b64938b6ebbc4f885.jpg',
  description:'',
  budget:100}
]
function Home() {

  const [NewItems,setNewItems] = useState<User[]>(items);
  const [showForm,setShowForm] = useState(true)
  const onAddUser=(item:UserData)=>{
    setNewItems((cur)=>[...cur,{name:item.name,image:item.image,budget:100,description:''}])
  }
  const[starHover,setStarHover]= useState<number>(0);
  const[starSelected,setStarSelected]= useState<number>(0);


  return (
    <div className=' text-black mx-auto h-screen  sm:top-0 relative py-4  grid lg:grid-cols-2 grid-cols-1'>


      <div  className=" col-span-1 bg-orange-50 flex justify-center flex-col cur sm:px-12 px-2 h-screen items-center">
        <ItemsContainer items={NewItems}/>
        {showForm  && <FormComponent onSubmitForm={onAddUser}/>}
        <Button name={showForm?"Close":"ShowForm"} onClick={()=>setShowForm((cur)=>!cur)} type="button"/>
      </div>

        <div  className=" col-span-1 flex justify-center items-center bg-orange-50">
          <div className=" flex flex-row gap-">
            
          {Array.from({length:10},(_,i)=>
          {
            return(
            <span  key={i} onMouseEnter={()=>setStarHover(i+1)} onMouseLeave={()=>setStarHover(0)} onClick={()=>setStarSelected(i+1)}>
             { (starHover >= i+1) || (starSelected as number >= i+1) ?
             <FaStar size='2rem' color='#eab308' cursor='pointer'/>
             :
             <FaRegStar size='2rem' color='#eab308' cursor='pointer' />
             }
            </span>
            )
          })}
          <p className=" text-2xl font-bold px-2">{starHover || starSelected}</p>


          </div>

        </div>




    </div>
  )
}

export default Home
