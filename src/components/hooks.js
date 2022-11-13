import { useLocation } from "react-router"

const useRoute = ()=>{
    const {pathname} = useLocation()
    // console.log(useRoutes())
    const path = pathname.split('/')
    const route = path[path.length-1]
    return {route,pathname}
}
const useScrollToTop = ()=>{
    window.scrollTo(0,0)
}

export {useRoute,useScrollToTop}
