import { useState } from "react"

// export default function Name(props){
//     return <span> {props.first} {props.last} </span>
// }

// Alt sentence
export default function Name({first, last}){
    // state for each name
    const [visible, setVisible] = useState(false);
    // setVisible => request change.
    // const because you need to rerender on change.
    if (visible) {
        return <span> {first} {last} </span>
    }
    else {
        return <span onClick={()=>setVisible(true)}> click to show </span>
    }
}