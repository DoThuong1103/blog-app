import { configureStore } from '@reduxjs/toolkit'
import { blogsSlice } from './features/blog/blogSlice'

export const blogStore = configureStore({
	reducer: {
		blogs: blogsSlice.reducer,
	},
})

// export type AppStore = ReturnType<typeof blogStore>
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
