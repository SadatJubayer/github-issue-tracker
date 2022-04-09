import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIssuesByOwnerAndRepo } from 'api/github';
import { IIssue } from 'types/IIssue';

/* Types */
export type IIssuesSlice = {
    issues: IIssue[];
    loading: boolean;
    error?: string;
    totalIssues: number;
    nextPage: number;
};

interface IFetchIssuesParams {
    owner: string;
    repository: string;
    page: number;
}

interface IThunkResponse {
    issues: IIssue[];
    totalPages: number;
}

const initialState: IIssuesSlice = {
    issues: [],
    loading: false,
    error: '',
    nextPage: 1,
    totalIssues: 0,
};

/* Async Thunks */
export const fetchIssues = createAsyncThunk<IThunkResponse, IFetchIssuesParams>(
    'fetchIssues',
    async (params, { rejectWithValue }) => {
        const { owner, repository, page } = params;
        const response = await getIssuesByOwnerAndRepo({ owner, repository, page });
        if (response.type === 'success') {
            return {
                issues: response.issues ?? [],
                totalPages: response.total ?? 0,
            };
        } else {
            return rejectWithValue(response.error);
        }
    }
);

const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIssues.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchIssues.fulfilled, (state, action) => {
                state.nextPage += 1;
                state.issues = action.payload.issues;
                state.totalIssues = action.payload.totalPages;
                state.loading = false;
            })
            .addCase(fetchIssues.rejected, (state, action) => {
                console.log('action ', action);
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default issuesSlice.reducer;
