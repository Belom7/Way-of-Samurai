import React from 'react';
import { useState } from 'react';

const ProfileStatus = (props) =>{

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activeitedEditMode = () => {
        setEditMode(true)    
    }
    const deActiveitedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        
    }
    return(
        <div>
            {!editMode && 
                <div><span onClick={activeitedEditMode}>{status || 'No status'}</span></div>
            }
            {editMode && 
                <div><input onChange={onStatusChange} autoFocus={true} onBlur={deActiveitedEditMode} value={status}/></div>
            }
        </div>
    )
}

export default ProfileStatus;





/* state ={
    editMode: false,
    status: this.props.status,
}

activeitedEditMode = () => {
    this.setState({
        editMode : true,
    })
    
}
deActiveitedEditMode = () => {
    this.setState({
        editMode : false
    })
    this.props.updateStatus(this.state.status)
}

onStatusChange = (e) => {
    this.setState({
        status: e.currentTarget.value
    })
    
}


componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
        this.setState({status: this.props.status})
    }
} */