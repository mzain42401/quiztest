import React, { useRef, useState } from 'react'
import Quiz from './Quiz'

const Main = () => {
    const [startQuiz,setStartquiz]=useState(false)
    const [name,setName]=useState()
    const [subject,setSubject]=useState()

    const userName=useRef()
    const userSubject=useRef()

    const formSubmitted =(e)=>{
e.preventDefault()
setStartquiz(true)
const Name=userName.current.value ;
setName(Name)
const Subject= userSubject.current.value ;
setSubject(Subject)

    }
    return (
        <>
            <section className='mainSection'>
                {
                    startQuiz?<Quiz name={name} subject={subject}/>:<div className='MainCenter'>
                    <h1>Quiz for Students</h1>
                   

                    <form onSubmit={formSubmitted} >
                        <div className='nameAndSubject'>
                            <div className="userName">
                                <label for="Name">Your Name </label>
                                
                                <div>
                                <input id='Name' ref={userName} required type="text" placeholder='Enter Your Name' />
                                </div>
                            </div>
                            <div className="userSubject">
                                <label for="subject">Select Your Subject </label>
                                <div>
                                <select ref={userSubject} id="subject" required name="subject">
                                    <option value="MathQuestions">Math</option>
                                    <option value="EnglishQuestions">English</option>
                                    <option value="ChemistryQuestions">Chemistry</option>
                                    <option value="BiologyQuesions">Biology</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='startBtn'>Start Quiz</button>
                        </div>
                        <div className='pointsDiv'>
                            <p>1. You have total  30  questions.</p>
                            <p>2. Don't use any other things for test. </p>

                        </div>

                    </form>

                </div>
                }

                
            </section>
        </>
    )
}

export default Main
