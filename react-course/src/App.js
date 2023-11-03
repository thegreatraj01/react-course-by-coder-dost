
import { useState } from 'react';
import './App.css';
import Thumb from './Chapter2/Thumbnail';
import Button from './Chapter4/Button';
// import Counter from './Chapter5/Counter';
// import Resume from './Resume/Resume';
import { videos } from './data';
import AddVideo from './Chapter6/AddVideo';


function App() {
  const [video, setVideo] = useState(videos);

  // function for add a new video from chapter 6 add new video component 
  const addnewvideo = (newvideo) => {
    setVideo([
      ...video,
      { ...newvideo, id: video.length + 1 }
    ]);
    console.log(video)
  }


  return (
    <div  >

      {/* sending a function to add new video component  */}
      <AddVideo addnewvideo={addnewvideo}> </AddVideo>


      <div style={{ display: "flex", width: "100vw" }} >
        {video.map((video) => {
          return (
            <Thumb key={video.id} title={video.title} channel={video.channel} view={video.view} time={video.time} verified={video.verified} id={video.id} >
              <Button onPlay={() => console.log("play", video.title)} onPause={() => console.log("pause", video.title)}>{video.title} </Button>
            </Thumb>

          )

        })}
      </div>
    </div>
  );
}

export default App;
