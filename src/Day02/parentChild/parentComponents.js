import React,{useState} from 'react'
import ChildComponents from './childComponents'

export default function ParentComponent() {
	const [answer, setAnswer] = useState("")
  const setQuiz = (quiz) =>{
		quiz === 'react' ? setAnswer(`your answer ${quiz} is true`) : setAnswer(`your answer ${quiz} is false`)
  }
  return (
    <div>
      <ChildComponents
        Answers = {answer}
        onQuiz = {setQuiz}
  	  />
    </div>
  )
}