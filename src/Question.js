import { useState } from "react";
import shortid from "shortid";
import Choices from "./Choices";
import Result from "./Result";

const Question = (props) => {

    const [button, setButton] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const handleCheckAnswer = (answer) =>{
        if(props.right === answer) {
            setButton(true)
        } else{
            setButton(false)
            setIsDone(true)
        }
     }

     const handleNext = () => {
         props.next(true)        
     }

    return ( 
        <>
        <h1>{props.question}</h1>
        <img src={props.image} alt="" />
        {props.option.map(option=> <Choices option={option} key={shortid.generate()} checkAnswer={handleCheckAnswer}/>)}
        {button && <button onClick={handleNext}>Next</button>}
        {isDone && <Result count={props.count}/>}
        {console.log(props.right)}
        </>
     );
}
 
export default Question;