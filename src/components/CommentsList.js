
import Comment from './Comment';
const CommentsList = ({commentsListData})=>{
    if(!commentsListData) return null;
    return(
        <div className="pl-5 border-l-2 border-gray-300 ml-5">
            {commentsListData.map((comment) => (
                <div key={comment.name}>
                    <Comment comment={comment} />
                    {/* Recursively render replies */}
                    <CommentsList commentsListData={comment.replies} />
                </div>
            ))}
        </div>
    )
}

export default CommentsList