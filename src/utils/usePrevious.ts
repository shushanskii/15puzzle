import { useEffect, useRef } from 'react'

export function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value // Assign the value of ref to the argument
  }, [value]) // This code will run when the value of 'value' changes
  return ref.current // In the end, return the current ref value.
}
