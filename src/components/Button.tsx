
function Button({name,type,onClick}:{name:string,type:string,onClick?:()=>void}) {
  return (
    <button onClick={onClick} type={type==='button'?"button":"submit"} 
    className=' bg-orange-300 p-2 rounded-2xl min-w-[150px]' >
    {name}
   </button>
  )
}

export default Button
