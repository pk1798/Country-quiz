const Choices = (props) => {

    const handleCheck = (e) => {
        e.preventDefault()
        props.checkAnswer(e.target.innerHTML)
    }

    return ( 
        <h3 onClick={handleCheck}>{props.option}</h3>
     );
}
 
export default Choices;