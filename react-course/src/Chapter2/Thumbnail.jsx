


function Thumb({ title, channel, view, time,verified,id ,children,deletevideo,editvideo}) {

    return (
        <div style={{margin:"10px", position:'relative'}}>
            <button onClick={()=>{deletevideo(id)}} style={{position:'absolute' ,right:'0px' }}>X</button>
            <button onClick={()=>{editvideo(id)}} style={{position:'absolute' ,right:'25px' }}>edit</button>
            <div>
            <img src={`https://picsum.photos/id/${id}/200/300`} alt="logo" />
            <p>{title}</p>
            <p>{channel} {verified && "✅"}</p>
            <p>views {view} <span>.</span> <span>{time}</span></p>
            <div>{children}</div>
            </div>
        </div>


    )
}

export default Thumb;
