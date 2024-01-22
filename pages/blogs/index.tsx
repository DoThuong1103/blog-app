import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

import AddBlog from '@/components/AddBlog'
import ListBlog from '@/components/ListBlog'
import { Blogs } from '@/utils/types'
export default function Blogs() {
	const { blogs }: Blogs = useSelector((state: { blogs: Blogs }) => state.blogs)
	return (
		<div className="flex w-full h-full items-center">
			<div className="min-h-[100vh] bg-white w-full max-h-[100vh] overflow-hidden overflow-y-scroll">
				<p className="text-center text-4xl font-bold pt-8">List Blogs</p>
				<ListBlog blogs={blogs} />
				<AddBlog />
			</div>
		</div>
	)
}
