import { useDispatch } from 'react-redux';
import type { RootDispatch } from 'store';

export const useRootDispatch = () => useDispatch<RootDispatch>();
