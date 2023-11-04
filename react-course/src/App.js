
import { useState } from 'react';
import './App.css';
// import Thumb from './Chapter2/Thumbnail';
// import Button from './Chapter4/Button';
// import Counter from './Chapter5/Counter';
// import Resume from './Resume/Resume';
import { videosDB } from './data';
import AddVideo from './Chapter6/AddVideo';
import Videolist from './Chapter6/Videolist';


function App() {
  const [videos, setVideo] = useState(videosDB);
  const [editablevideo, setEditablevideo] = useState(null)

  // function for add a new video from chapter 6 add new video component 
  const addnewvideo = (newvideo) => {
    setVideo([
      ...videos,
      { ...newvideo, id: videos.length + 1 }
    ]);
    console.log(videos);
  }

  const deletevideo = (id) => {
    // jis vi video ka id niche se aa rahe id se match hoga bo array se filter ho jayega 
    setVideo(videos.filter(v => v.id !== id))
    // console.log(id);
  }

  const editvideo = (id) => {
    // jo video edit hoga 
    setEditablevideo(videos.find(v => v.id === id));

  }

  // function for update a video from add video component 
  const updatevideo = (video) => {
    const index = videos.findIndex(v => v.id === video.id);
    const newvideo = [...videos]
    newvideo.splice(index, 1,video);
    setVideo(newvideo)
    // console.log(newvideo ,"9");
    

  }

  return (
    <div  >

      {/* sending a function to add new video component  */}
      <Videolist editvideo={editvideo} deletevideo={deletevideo} videos={videos} ></Videolist>
      <AddVideo addnewvideo={addnewvideo} updatevideo={updatevideo} editablevideo={editablevideo}> </AddVideo>


    </div>
  );
}

export default App;
