import { useDispatch } from 'react-redux';
import type { AppDispatch } from './configureStore';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
