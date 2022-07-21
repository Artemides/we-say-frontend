import ActivityDetector from 'activity-detector';
import { useEffect, useState } from 'react';

export const useIdle=(options)=>{
    const [isIdle, setIsIdle] = useState(false)
    useEffect(()=>{
        const activity=new ActivityDetector(options);
        activity.on('idle', () => { setIsIdle(true)});
        activity.on('active', () => { setIsIdle(false)});
        return ()=>activity.stop();
    },[]);
    return isIdle;
}