import { useDispatch } from "react-redux";
import {toggleMenu} from '../config/appSlice'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import {search_api} from '../config/constants'


const Head = ()=>{
    const [searchQuery,setSearchQuery] = useState('');
    const [searchResults,setSearchResults] = useState([])
    const dispatch = useDispatch();
    const handleIconClick=()=>{
        dispatch(toggleMenu())
    }

    useEffect(()=>{
        const timer = setTimeout(()=> getSearchQuery(),200)
        return(()=>{
            clearTimeout(timer)
        })
    },[searchQuery])

    const getSearchQuery= async()=>{
        const data = await fetch(search_api+searchQuery)
        const json = await data.json();
        console.log(json[1])
        setSearchResults(json[1])
    }
    return(
        <div className="grid grid-flow-col shadow-lg p-2">
            <div className="flex col-span-1">
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/039/663/622/non_2x/website-navigation-hamburger-menu-icons-set-flat-website-menu-icons-with-rounded-and-sharp-edges-free-vector.jpg" 
                    width='40px' 
                    className="mr-1 cursor-pointer hover:bg-black"
                    onClick={handleIconClick}/>
                <Link to='/'>
                    <img src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" width='70px'/>
                </Link>
            </div>
            <div className="col-span-10">
                <div className="flex w-6/12">
                    <input 
                        className="w-full border border-black rounded-l-full px-4" 
                        type="text" 
                        placeholder="search"  
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    <img 
                        src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg" 
                        width='45px' 
                        className="border border-black p-2 rounded-r-full cursor-pointer bg-gray-100"
                    />
                </div>
                    {searchResults.length!==0 ?
                        <div className="absolute bg-white py-3 px-5 w-6/12 shadow-lg mt-2">
                            <ul>
                                {searchResults.map((item,index)=>(<li key={index} className="hover:bg-gray-100">{item}</li>))}
                            </ul>
                        </div> : null
                    }
            </div>
            <div className="col-span-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" height='30px' width='30px' />
            </div>
        </div>
    )
}

export default Head;