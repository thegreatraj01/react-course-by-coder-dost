


function Thumb({ title, channel, view, time,verified,id ,children}) {

    return (
        <div style={{margin:"10px"}}>
            <img src={`https://picsum.photos/id/${id}/200/300`} alt="logo" />
            <p>{title}</p>
            <p>{channel} {verified && "✅"}</p>
            <p>views {view} <span>.</span> <span>{time}</span></p>
            <div>{children}</div>
        </div>


    )
}

export default Thumb;
