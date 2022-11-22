import { useLocation } from "react-router"
import { useState, useEffect } from 'react';

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

//dimension hook
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


export {useRoute,useScrollToTop}
