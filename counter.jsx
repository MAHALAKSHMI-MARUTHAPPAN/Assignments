import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const Increment=()=>{
        setCount (count+1)
    };

    const Degrement=()=>{
        setCount(count-1)
    };
    const Reset=()=>{
         setCount(0)
    };
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={ Increment}> Increment</button>
        <button onClick={Degrement}>Degrement</button>
          <button onClick={Reset}> Reset</button>
    </div>
  )
}

export default Counter
