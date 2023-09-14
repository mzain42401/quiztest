import React from 'react'

const Result = ({ score, Tscore, playagain }) => {
    const result = score / Tscore * 100
    // result.toFixed(0)
    return (
        <>
            <div className={` circle ${result>50?'circleBGGreen':'circleBGRed'}`}>
                <div className='whiteCircle'>

                {result.toFixed(0)}%
                </div>
            </div>
            <div>
                <button className='nextBtn' onClick={() => playagain()}>Play Again</button>
            </div>
        </>
    )
}

export default Result
