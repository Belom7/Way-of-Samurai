import React from 'react';

class ProfileStatus extends React.Component {

    state ={
        editMode: false
    }

    activeitedEditMode () {
        this.setState({
            editMode : true
        })
        
    }
    deActiveitedEditMode () {
        this.setState({
            editMode : false
        })
        
    }

    render(){
    return(
        <div>
            {!this.state.editMode && 
                <div><span onClick={this.activeitedEditMode.bind(this)}>{this.props.status}</span></div>
            }
            {this.state.editMode && 
                <div><input autoFocus={true} onBlur={this.deActiveitedEditMode.bind(this)} value={this.props.status}/></div>
            }
        </div>
    )}
}

export default ProfileStatus;