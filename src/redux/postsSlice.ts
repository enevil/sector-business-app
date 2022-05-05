import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../interfaces/post.inerface';

export type SortCategory = 'id' | 'title' | 'body';
type RequestStatus = 'loading' | 'resolved' | 'rejected';

interface SliceState {
  posts: Post[],
  filteredPosts: Post[],
  sortBy: SortCategory,
  searchString: string,
  status: RequestStatus,
  error: unknown | null
}

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: SliceState = {
  posts: [], sortBy: 'id', status: 'loading', error: null, searchString: '', filteredPosts: [],
};

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    setSortType(state, action: PayloadAction<SortCategory>) {
      state.sortBy = action.payload;
      switch (state.sortBy) {
        case 'id':
          state.filteredPosts = state.filteredPosts.sort((a, b) => a.id - b.id);
          break;
        case 'title':
          state.filteredPosts = state.filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'body':
          state.filteredPosts = state.filteredPosts.sort((a, b) => a.body.localeCompare(b.body));
          break;

        default:
          throw new Error('Несуществующий тип сортировки');
      }
    },
    setSearchString(state, action: PayloadAction<string>) {
      state.searchString = action.payload;
      state.filteredPosts = state.posts
        .filter((p) => p.title.includes(state.searchString) || p.body.includes(state.searchString));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
      state.filteredPosts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export default postsSlice.reducer;
export const { setSortType, setSearchString } = postsSlice.actions;
