import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'store';

export const useRootState: TypedUseSelectorHook<RootState> = useSelector;
