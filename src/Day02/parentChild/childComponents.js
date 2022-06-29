import React from 'react'

export default function childComponents(props) {
	return (
		<div>
			<h1>Quiz Programming</h1>
			<p>What programming for build cross-platform app ?</p>
			<button onClick={()=>props.onQuiz('react')}>React</button>
			<button onClick={()=>props.onQuiz('phyton')}>Phyton</button>
			<button onClick={()=>props.onQuiz('golang')}>Golang</button>
			<h2>{props.Answers}</h2>
		</div>
	)
}
