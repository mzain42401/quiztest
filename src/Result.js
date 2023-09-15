import React from 'react'

const Result = ({ score, Tscore, playagain }) => {
    const result = score / Tscore * 100

    
    
    return (
        <>
            <div className='circle' style={{
                background: `conic-gradient(#007fff ${result * 3.6}deg , #cfcece 0deg)`

            }} >

                <div className='circleValue'>
                    {result.toFixed(0) + "%"}
                </div>

            </div>
            {result>50 ?
                <div style={{color:"green",fontSize:"20px",fontWeight:"bolder"}}>Congratulations!</div> :
                <div style={{color:"red",fontSize:"20px",fontWeight:"bolder"}}>Need Improvement!</div>

            }
            <div>
                <button className='nextBtn' onClick={() => playagain()}>Play Again</button>
            </div>
        </>
    )
}

export default Result
