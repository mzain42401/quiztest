import React, { useState } from 'react'
import mydata from './data.json'
import './style.css'
import Result from './Result'



const Quiz = ( {name,subject}) => {
   

    const [num, setNum] = useState(0)
    const [clicked, setClicked] = useState(null)
    const [score, setScore] = useState(0)
    const [result,setResult]=useState(false)
    const [alert,serAlert]=useState(false)


const playagain=()=>{
setNum(0)
setResult(false)
setScore(0)
}

    const netQuestion = () => {

    if(clicked!==null){
        serAlert(false)
        if (clicked === mydata[subject][num].correctAnswer) {
            setScore(score + 1)
        }
        setClicked(null)
        
        if (num < mydata[subject].length ) {
            setNum(num + 1)

        }
        if (num ===29) {
            setResult(true)
        }
    }
    else{
        serAlert(true)
    }

       


    }

    const userAnswer = (elem) => {

        setClicked(elem)

    }

    return (
        <>
            <div className="mainContainer">
                {result?null: <h1>Hi <span>  {name}</span>, keep it up you can do it. </h1>}
                {
                    result? <Result playagain={playagain} score={score} Tscore={30}/> :<>
                    <div className='questionDiv'>
                     <div className="question"><span>{num+1}. </span> {mydata[subject][num].question}</div>
                     </div>
                    {
                        alert?<p className='alertMessage'>Select any one option</p>:null
                    }
                    <ul>
                        {
                            mydata[subject][num].options.map((elem,ind) => {
                                return <li key={ind} className={clicked===elem? 'checked':null} onClick={() => userAnswer(elem)}>{elem}</li>
                            })
                        }
                    </ul>
                    <div className='btnDiv'>
                        <div className='outOff'>{num + 1} out of 30</div>
                        <button className='nextBtn' onClick={netQuestion}> {num===29?'Score':"Next"} </button>
    
                    </div>
                    </>
                }
                
            </div>

        </>
    )
}

export default Quiz
