import React,{Component} from 'react'
import ChildName from './childName'

export default class parentName extends Component {
  state = {
    firstname : 'Muhammad',
    lastname : 'Rifaldi'
  }

  render(){
    return(
	    <div>
        <ChildName
          firstname = {this.state.firstname}
          lastname = {this.state.lastname}
	      />
      </div>
    )
  }
}