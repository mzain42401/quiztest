import React, { useRef, useState } from 'react'

const Result = ({ score, Tscore, playagain }) => {
    const result = score / Tscore * 100
const circle= useRef()
const circleValue= useRef()
const [value,setValue]=useState()
let progressStartValue=0
let progressEndValue=50;
let speed =100;
// let progress=setInterval(()=>{
//  progressStartValue++
//  circleValue.current.style.background='conic-gradient(red ${progressStartValue*3.6}deg , #000 0deg)'
// setValue(progressStartValue)

//  if (progressStartValue==progressEndValue) {
//     clearInterval(progress)
//  }
//  console.log(progressStartValue );
// },speed)


    // result.toFixed(0)
    return (
        <>
            <div ref={circle}  className={` circle ${result>50?'circleBGGreen':'circleBGRed'}`}>
                
                <div className='circleValue'>
                {value}
                    </div> 
                
            </div>
            {result>50?
                <div>Congratulations!</div>:
                <div>Need Improvement!</div>

            }
            <div>
                <button className='nextBtn' onClick={() => playagain()}>Play Again</button>
            </div>
        </>
    )
}

export default Result
