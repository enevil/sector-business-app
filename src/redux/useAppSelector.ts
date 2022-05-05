import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './configureStore';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
