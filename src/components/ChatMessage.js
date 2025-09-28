const ChatMessage = ({name,text})=>{
    return(
        <div>
            <div className="flex items-center m-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" width='35px' className="mr-2 "/>
                <h1 className="text-lg font-bold mx-2">{name}</h1>
                <p className="ml-2">{text}</p>
            </div>

        </div>
    )
}

export default ChatMessage