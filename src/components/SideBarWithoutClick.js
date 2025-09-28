const SideBarWithoutClick = ()=>{
    return(
        <div className="m-2 p-2">
            <ul className="cursor-pointer">
                <li className="mt-3 p-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy9mBtyJWUPLRobv__N2OwHYdiKAWarKroQ&s" width='25pxx'/>
                    <p className="text-sm">Home</p>
                </li>
                <li className="mt-3 p-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwB-84DwBgGMVW3sRVPbh6Q1SGvKTpNNYd8A&s" width='25px'/>
                    <p className="text-sm">Shorts</p>
                </li>
                <li className="mt-3 p-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4tIWRcb8bnO0QltGJZ5zDvmRZbFhX6ByMg&s" width='25px'/>
                    <p className="text-sm">Subscriptions</p>
                </li>
                <li className="mt-3 p-1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" width='25px' />
                    <p className="text-sm">You</p>
                </li>
            </ul>
    </div>
    )
}

export default SideBarWithoutClick;