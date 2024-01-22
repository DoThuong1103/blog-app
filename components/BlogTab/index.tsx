import { Blog } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogTab({ blog }: { blog: Blog }) {
	return (
		<Link href={`/blogs/${blog.id}`}>
			<div className="flex items-start gap-2 p-2 shadow-md rounded">
				<Image
					src={blog.image}
					alt={''}
					width={400}
					height={400}
					className="w-28 h-28 object-cover rounded"
				/>
				<div className="flex flex-col gap-1">
					<p className="font-semibold">
						{blog.title.length > 40
							? blog.title.slice(0, 40) + '...'
							: blog.title}
					</p>
					<p className="text-sm text-[#ccc]">{blog.date}</p>
				</div>
			</div>
		</Link>
	)
}
