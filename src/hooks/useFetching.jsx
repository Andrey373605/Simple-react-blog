import { useState } from "react";

export function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async(...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }

    }

    return [fetching, isLoading, error]
}