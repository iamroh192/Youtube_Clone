
import CommentsList from './CommentsList'

const CommentsContainer = ()=>{
    const commentsListData = [
        {
            name:'rohith',
            text:'Culpa eiusmod cillum reprehenderit eu proident.',
            replies:[]
        },
        {
            name:'pooja',
            text:'Labore id non ipsum ipsum pariatur.',
            replies:[
                {
                    name:'Tushar',
                    text:'Est incididunt exercitation elit sit reprehenderit dolore fugiat magna culpa cupidatat.',
                    replies:[]
                }
            ]
        },
        {
            name:'Ajay',
            text:'Do laboris mollit proident cupidatat laboris sunt consequat cupidatat do commodo voluptate adipisicing ea.',
            replies:[
                {
                    name:'Akhil',
                    text:'Sunt cupidatat cupidatat cupidatat cupidatat cupidatat cupidatat cupidatat cupid',
                    replies:[
                        {
                            name:'Prakash',
                            text:'Id culpa culpa laboris et nulla in anim laborum qui quis.',
                            replies:[]
                        }
                    ]
                },
                {
                    name:'Narsi',
                    text:'Officia ut cupidatat veniam magna excepteur dolore Lorem voluptate excepteur excepteur fugiat id ipsum exercitation.',
                    replies:[]
                }
            ]
        },
        {
            name:'Abilash',
            text:'Fugiat dolore id minim dolore dolor sint.',
            replies:[
                {
                    name:'Sakthi',
                    text:'Sit dolor aute commodo Lorem aliqua nisi excepteur.',
                    replies:[
                        {
                            name:'Phani',
                            text:'Nulla ex fugiat minim irure amet nisi non sunt esse quis minim tempor eu.',
                            replies:[
                                {
                                    name:'Srinivas',
                                    text:'In ex ullamco est laborum cillum eu eiusmod occaecat amet non pariatur.',
                                    replies:[]
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'Narendra',
                    text: 'Ipsum mollit nostrud aute labore minim.',
                    replies:[
                        {
                            name:'Murali',
                            text: 'Ullamco nulla et aute aute.',
                            replies:[]
                        }
                    ]
                }
            ]
        },
        {
            name:'Prasanna',
            text:'Exercitation eiusmod nisi deserunt ea mollit et fugiat sunt.',
            replies:[]
        },
    ] 
    return(
        <div className="m-5 p-2">
            <h1 className="font-bold text-xl"> Comments:</h1>
            <CommentsList commentsListData = {commentsListData}/>
        </div>
    )
}

export default CommentsContainer;

