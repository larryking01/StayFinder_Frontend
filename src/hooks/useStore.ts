import { useSelector, useDispatch } from 'react-redux'   
import type { Rootstate, AppDispatch } from '../store/store'







// Use throughout the app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<Rootstate>()
