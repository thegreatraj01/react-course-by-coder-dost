
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


  return (
    <div  >

      {/* sending a function to add new video component  */}
      <Videolist deletevideo={deletevideo} videos={videos} ></Videolist>
      <AddVideo addnewvideo={addnewvideo}> </AddVideo>


    </div>
  );
}

export default App;
