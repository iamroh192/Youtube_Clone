
import ChatMessage from "./ChatMessage"
import Demo from "./Demo"
const LiveChat = ()=>{
    return(
        <div className="m-2 p-2 w-96 border border-black w-full h-[450px] bg-slate-100 rounded-lg">
            <h1 className="p-1 font-bold">Live Chat</h1>
            {/* <ChatMessage  name='rohith' text='This is namasthey Youtube'/>
            <ChatMessage  name='rohith' text='This is namasthey Youtube'/>
            <ChatMessage  name='rohith' text='This is namasthey Youtube'/>
            <ChatMessage  name='rohith' text='This is namasthey Youtube'/>   */}
            <Demo />
        </div>
     
    )
}



export default LiveChat