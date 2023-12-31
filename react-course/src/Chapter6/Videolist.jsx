import React from 'react'
import Thumb from '../Chapter2/Thumbnail';
import Button from '../Chapter4/Button';


const Videolist = ({ videos,dispatch,editvideo }) => {
    return (
        <div>
            <div style={{ display: "flex" }} >
                {videos.map((video) => {
                    return (
                        <Thumb key={video.id} title={video.title} channel={video.channel} view={video.view} time={video.time} verified={video.verified} id={video.id} dispatch={dispatch} editvideo={editvideo} >
                            <Button onPlay={() => console.log("play", video.title)} onPause={() => console.log("pause", video.title)}>{video.title} </Button>
                        </Thumb>

                    )

                })}
            </div>
        </div>
    )
}

export default Videolist