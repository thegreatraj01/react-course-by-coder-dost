import { useEffect, useState } from "react";

function AddVideo({ dispatch, editablevideo }) {

    const initialstate = {
        channel: "my channel",
        time: '1 month ago',
        verified: true,
        title: '',
        view: ''
    }
    const [newvideo, setNewvideo] = useState(initialstate)

    // function for add video to the parent 

    const handlesubmit = (e) => {
        e.preventDefault();
        // calling the prop function for adding a new vido from child component 
        if (editablevideo) {
            dispatch({ type: "UPDATE", payload: newvideo });
        } else {
            dispatch({ type: "ADD", payload: newvideo });
        }
        setNewvideo(initialstate);
        // console.log(newvideo);
    }

    // function for create a new video 
    const handlechange = (e) => {
        setNewvideo({
            ...newvideo,
            [e.target.name]: e.target.value
        })
        // console.log([e.target.name], e.target.value);
        // console.log(newvideo);
    }

    useEffect(() => {
        if (editablevideo) {
            setNewvideo(editablevideo)
        }
    }, [editablevideo])



    return (
        <form>
            <input type="text" value={newvideo.title} name='title' placeholder='title' onChange={handlechange} />

            <input type="text" name='view' value={newvideo.view} placeholder="views" onChange={handlechange} />

            <button onClick={handlesubmit}> {editablevideo? "edit":"add"}  video </button>

        </form>
    )
}

export default AddVideo;