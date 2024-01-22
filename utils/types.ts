export const UPDATE_FIELD = 'UPDATE_FIELD'
export const DELETE_FIELD = 'SUBMIT_FORM'

export interface BlogContent {
	subTitle: string
	subDescription: string
}

export interface Blog {
	id: string
	title: string
	image: string
	date: string
	content?: BlogContent[]
}

export interface Blogs {
	blogs: Blog[]
}

export interface UpdateFieldAction {
	type: typeof UPDATE_FIELD
	field: keyof Blog
	value: string
}

export interface DeleteFieldAction {
	type: typeof DELETE_FIELD
	id: number
}
