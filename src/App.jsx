import { useState,useCallback,useEffect } from 'react'


function App() {
 const[length,  setLength]=useState(6)
 const [numberShow,setNumberShow] = useState(false);
 const [character,setCharacterShow] = useState(false);
 const[password,setPassword]=useState("")
const passwordgenerator=useCallback( ()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numberShow){
    str=str+"123456789";
  }
  if(character)
  {
    str=str+`!@`
  }
  for(let i=1;i<=length;i++)
  {
   let char=Math.floor(Math.random()*str.length+1)
   pass +=str.charAt(char)
  }
  setPassword(pass);
  console.log("runn")


},[length,numberShow,character,setPassword])

useEffect( ()=>{
  passwordgenerator()
  console.log("run useeffect")
},[length,numberShow,character, passwordgenerator] )

  return (
    <>
      <div className=' w-full max-w-md mx-auto rou-lg px-4 my-8 text-orange-300 bg-blue-700 '>
        <h1>Generate Password</h1>
        <div className='flex shadow rounded-lg overflow-hidden md:4'>
          <input type="text"
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='Your password'/>
          <button>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range" 
            value={length}
            min={6}
            max={100}
            onChange={(e)=>{setLength(e.target.value)}} 
            className='cursor-pointer'/>
            <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
          <input type="checkbox"
          defaultChecked={numberShow}
          onChange={()=>{setNumberShow((prev)=>!prev)}
  } />Number
          </div>


          <div className='flex items-center gap-x-2'>
          <input type="checkbox"
          defaultChecked={numberShow}
          onChange={()=>{setCharacterShow((prev)=>!prev)}
  } />character
          </div>

        </div>
      </div>
    </>
  )
}

export default App
