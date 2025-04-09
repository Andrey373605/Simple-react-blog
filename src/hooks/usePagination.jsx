import { useMemo } from "react";

export const usePagination = (totalPages) => {
    const pagesArray = useMemo(()=>{
            return [...Array(totalPages).keys()].map(i => i+1);
        }, [totalPages])
    return pagesArray    
}