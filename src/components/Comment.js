const Comment = ({comment})=>{
    const {name,text } = comment
    return(
        <div className="flex m-2 p-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" width='45px' className="mr-2 "/>
            <div>
                <p className="font-semibold">{name}</p>
                <p className="font-light">{text}</p>
            </div>
        </div>
    )
}

export default Comment