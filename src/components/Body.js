import SideBar from './SideBar'
import MainBar from './MainBar'

const Body=()=>{
    return(
        <div className='grid grid-flow-col'>
            <SideBar />
            <MainBar />
        </div>
    )
}

export default Body;