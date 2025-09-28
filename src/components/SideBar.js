import { useSelector } from "react-redux";
import SideBarWithoutClick from "./SideBarWithoutClick";
import SideBarWhenClick from './SideBarWhenClick'
const SideBar = ()=>{
    const toggleClick = useSelector((store)=>store.app.isMenuOpen)
    return(
        <div className='col-span-1'>
            {toggleClick ? <SideBarWhenClick /> : <SideBarWithoutClick />}
        </div>
    )
}

export default SideBar