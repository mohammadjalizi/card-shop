import { useReducer } from "react";


const Header = () => {
    const [state, dispatch] = useReducer(name, { age: 42 });
  return (
    <div>Header {state.age}  </div>
  )
}

export default Header