
import { useReducer, useState } from 'react';
import './App.css';
import { videosDB } from './data';
import AddVideo from './Chapter6/AddVideo';
import Videolist from './Chapter6/Videolist';


function App() {
  const [editablevideo, setEditablevideo] = useState(null)
  const [videos, dispatch] = useReducer(videoRuduser, videosDB);

  function videoRuduser(videos, action) {
    console.log(action);
    switch (action.type) {
      case "ADD":
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1 }
        ]
      case "DELETE":
        return videos.filter(v => v.id !== action.payload)
      case "UPDATE":
        const index = videos.findIndex(v => v.id === action.payload.id);
        const newvideo = [...videos]
        newvideo.splice(index, 1, action.payload);
        setEditablevideo('')
        return newvideo;
      default:
        return videos
    }

  }


  
  const editvideo = (id) => {
    // jo video edit hoga 
    setEditablevideo(videos.find(v => v.id === id));

  }

 

  return (
    <div  >

      {/* sending a function to add new video component  */}
      <Videolist editvideo={editvideo} dispatch={dispatch} videos={videos} ></Videolist>
      <AddVideo dispatch={dispatch} editablevideo={editablevideo}> </AddVideo>


    </div>
  );
}

export default App;
