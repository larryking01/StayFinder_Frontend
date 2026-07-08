// custom hook to apply conditional styles via media queries made via javascript
import { useState, useEffect} from 'react'









const useMediaQuery = (query: string) => {

    // get the current viewport size directly from the browser by checking if the passed media query was matched
    const [ matches, setMatches ] = useState<boolean>(() => window.matchMedia(query).matches)


    useEffect(() => {
        // get the media query list object
        const mediaQuery = window.matchMedia(query) 

        // method to update mobile device status
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setMatches( event.matches )
        }

        // listen for changes in the media query/screen size and update mobile state automatically
        mediaQuery.addEventListener('change', handleMediaQueryChange)


        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }

    }, [ query ])


    // return final value of mobile status, true or false
    return matches
}



export default useMediaQuery