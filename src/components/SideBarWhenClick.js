const SideBarWhenClick = ()=>{
    return(
        <div className="m-2">
            <ul>
                <li className="my-4 border-b">
                    <ul className="cursor-pointer">
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy9mBtyJWUPLRobv__N2OwHYdiKAWarKroQ&s" width='25pxx'/>
                            <p className="text-sm ml-4">Home</p>
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwB-84DwBgGMVW3sRVPbh6Q1SGvKTpNNYd8A&s" width='25px'/>
                            <p className="text-sm ml-4">Shorts</p>
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4tIWRcb8bnO0QltGJZ5zDvmRZbFhX6ByMg&s" width='25px'/>
                            <p className="text-sm ml-4">Subscriptions</p>
                        </li>
                    </ul>
                </li>
                <li className="my-4 border-b">
                    <p>You</p>
                    <ul className="mt-2 cursor-pointer">
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBZzcNepxa9bRUuE_G6jcOBxKLTCpkoPtkw&s" width='20px'/>
                            <p className="text-sm ml-4" >History</p>  
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBXV5qjutFyiqkChJ0CKXHgtlt7ewpthIsA&s" width='20px'/>
                            <p className="text-sm ml-4">Playlists</p>
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IaxvFE04TK4iLNuK1M1sDklCmuuDv5dIQQ&s" width='20px'/>
                            <p className="text-sm ml-4">Your videos</p>
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzbmgQ-nTBKefaRs7FbwZVjpLfL96N09ZtA&s" width='20px'/>
                            <p className="text-sm ml-4">Watch Later</p>
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://e7.pngegg.com/pngimages/976/86/png-clipart-facebook-like-button-youtube-computer-icons-youtube-angle-rectangle.png" width='20px'/>
                            <p className="text-sm ml-4">Liked videos</p>
                        </li>
                    </ul>
                </li>
                <li className="my-4 border-b">
                    <ul className="mt-2 cursor-pointer">
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AZbihpZglVh8UDOD6Kc1P7X5_VRXcYk00A&s" width='20px' />
                            <p className="text-sm ml-4">Settings</p>
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOQOdAMYu0ytXrpjnRRduhNgvVvX9VlH4Ww&s" width='20px' />
                            <p className="text-sm ml-4">Report History</p>  
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://w7.pngwing.com/pngs/317/872/png-transparent-youtube-play-button-computer-icons-help-text-trademark-sign.png" width='20px' />
                            <p className="text-sm ml-4">Help</p>
                        </li>
                        <li className="mt-1 p-1 flex">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmlzMGMfH6Nt0O4fN3drWO_i7BBz2_mB3WA&s" width='20px' />
                            <p className="text-sm ml-4">Send Feedback</p>
                        </li>
                    </ul>
                </li>
                {/* <li></li>
                <li></li>
                <li></li> */}
            </ul>
    </div>
    )
}

export default SideBarWhenClick;