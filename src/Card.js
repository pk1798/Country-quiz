import { useState } from "react";
import shortid from "shortid";
import Question from "./Question";

const Card = (props) => {

    const countryArray = props.data
    let questions;
    const [next, setNext] = useState(false)
    const [count, setCount] = useState(0)


    const shuffleArray = (arr) => {
        for (let i = arr.length - 1 ; i > 0 ; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
  
    const questionOne = (arr) => {
        const randomNum = Math.floor(Math.random() * 249);
        const question =  `${arr[randomNum].name} is the capital of ?`;
        const options = [
            arr[randomNum].capital, 
            arr[Math.floor(Math.random() * 249)].capital, 
            arr[Math.floor(Math.random() * 249)].capital, 
            arr[Math.floor(Math.random() * 249)].capital
         ];

         const shuffledOptions = shuffleArray(options)

         var questionObj = {
             question : question,
             option : shuffledOptions ,
             right : arr[randomNum].capital,
             id: shortid.generate()
         }
         questions = questionObj
    }

    const questionTwo = (arr) => {
        const randomNum = Math.floor(Math.random() * 249);
        const image = arr[randomNum].flag;
        const question =  'this flag belogns to which country?';
        const options = [
            arr[randomNum].capital, 
            arr[Math.floor(Math.random() * 249)].capital, 
            arr[Math.floor(Math.random() * 249)].capital, 
            arr[Math.floor(Math.random() * 249)].capital
         ];

         const shuffledOptions = shuffleArray(options)

         var questionObj = {
             question : question,
             image : image,
             option : shuffledOptions ,
             right : arr[randomNum].capital,
             id: shortid.generate()
         }
         questions = questionObj
    }

    const randomNum = Math.floor(Math.random() * 2);
    const questionArray = [questionOne , questionTwo];
    questionArray[randomNum](countryArray)

    const handleNext = () => {
        setNext(!next)
        setCount(count+1)
    }

  
    return ( 
        <div className="container">
            <Question question={questions.question} key={questions.id}  image={questions.image} option={questions.option} right={questions.right} next={handleNext} count={count}/>
        </div>
     );
}
 
export default Card;