import React, { useState,useEffect } from "react";
import { QuizData } from "../Data/data";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
//   const [repeated,setRepeated]=useState(false)
  const [score,setScore]=useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const uniqueNumbersSet = new Set(); 

      while (uniqueNumbersSet.size < 10) {
        const randomNumber = Math.ceil(Math.random() * 10);
        uniqueNumbersSet.add(randomNumber-1);
      }

      const uniqueNumbersArray = Array.from(uniqueNumbersSet);
      setArr(uniqueNumbersArray);
    };

    generateRandomNumbers(); 
  }, []); 
  console.log(arr);
  
  const handleClick = (question,option)=>{
    if(QuizData[arr[question-1]].options[option]===QuizData[arr[question-1]].options[QuizData[arr[question-1]].answer-1])
    {   
        setScore(score+1);
        setQuestionNumber(questionNumber+1)
    }
   
    console.log(score);
  }
//   console.log(QuizData);
  return (
    <>{
        questionNumber<=10 ? ( <div
            className="container  d-flex justify-content-center align-items-center flex-column "
            style={{ height: "80vh", width: "50vw" }}
          >
            <div className="progress mb-5" style={{ width: "36vw" }} role="progressbar" aria-label="success example " aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" aria-label="success example " style={{width:`${questionNumber*10}%`,backgroundColor: '#198754'}}></div>
</div>
            <div className="container  d-flex justify-content-center align-items-center mb-3 border border-secondary" style={{ height:"10vh",width: "36vw" }}>
             <h5>Q {questionNumber}:
              {QuizData[arr[questionNumber - 1]]?.question}</h5> 
               
            </div>
            <div className="container  d-flex justify-content-center align-items-center flex-column">
              {QuizData[arr[questionNumber - 1]]?.options.map((element, index) => {
                return (
                  <button
                    type="button"
                    class="btn btn-light m-2 border border-primary"
                    style={{ width: "36vw" }}
                    onClick={()=>handleClick(questionNumber,index)}
                  >
                    {element}
                  </button>
                );
              })}
            </div>
            <button
                    type="button"
                    class="btn btn-success m-2"
                    onClick={()=>{
                     
                      setQuestionNumber(questionNumber+1)
                  }}
                  >
                    Next
                  </button>
          </div>) : (
           <div
           className="container  d-flex justify-content-center align-items-center flex-column "
           style={{ height: "80vh", width: "50vw" }}
         >
            {score<=5 ? (<h2>Keep Going! You Can Improve!</h2>): (<h2>Congratulations!</h2>)}
            <h2>Your Score is :</h2>
            <h3>{score}</h3>
            <button type="button"
                    class="btn btn-success m-2" onClick={()=>window.location.reload(false)}>Try Again</button>
         </div>

          )
    }
   
    </>
    
  );
};

export default Quiz;
