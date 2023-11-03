
const Button = ({ massage, children, onPlay, onPause }) => {
    let palying = false;
    const handleClick = () => {
        if (palying) {
            onPause();
        } else {
            onPlay();
        }
        palying =!palying;
    }
    return (
        <>
            {/* <button onClick={()=>console.log({massage})}>play </button> */}
            <button onClick={handleClick}>{children} </button>
        </>
    )
};

export default Button;