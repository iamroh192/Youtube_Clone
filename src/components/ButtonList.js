const ButtonList = ()=>{
    const List = ['All','Movies','Music','Mixes','Live','Comedy','Podcast','Thrillers','Sports','News'];
    return (
        <div className="flex m-4">
            {List.map((button,index)=>
                <button key = {index} className="m-2 px-3 py-1 bg-gray-200 rounded-md">{button}</button>
            )}

        </div>
    )
}

export default ButtonList