const VideoCard = ({item})=>{
    console.log(item)
    const {snippet,statistics}=item;
    const {thumbnails,channelTitle,title,publishedAt}=snippet;
    const {viewCount} = statistics
    return(
        <div className="m-2 p-1 cursor-pointer shadow-md bg-gray-50 w-64 h-80">
            <img src={thumbnails.medium.url} alt='thumbnail' height={thumbnails.medium.height} width={thumbnails.medium.width} className="m-2 rounded-xl" />
            <p className="font-bold">{title}</p>
            <p>{channelTitle}</p>
            <div>
                <span>{viewCount} views</span>
                {/* <span>{publishedAt.newDate()}</span>  */}
            </div>
        </div>
    )
}

export default VideoCard;