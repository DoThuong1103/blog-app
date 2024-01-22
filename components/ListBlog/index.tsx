import { Blogs } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogTab from '../BlogTab'

export default function ListBlog({ blogs }: Blogs) {
	const listBlog = [...blogs]
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white px-4 py-10 h-full w-full ">
			{listBlog?.reverse()?.map((blog) => {
				return (
					<div key={blog.id}>
						<BlogTab blog={blog} />
					</div>
				)
			})}
		</div>
	)
}
