import { Blog, Blogs } from '@/utils/types'
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Image from 'next/image'
import calendar from '@/public/calendar.png'
export default function Blog() {
	const router = useRouter()
	const { blogs }: Blogs = useSelector((state: { blogs: Blogs }) => state.blogs)
	const dataBlog = blogs.find((blog) => blog.id === router.query.blogId)
	return (
		<div className="max-w-[1140px] bg-white mx-auto">
			<div className="pt-10 pr-[20px] pl-[20px] md:pr-[40px] md:pl-[40px] lg:pr-[64px] lg:pl-[64px] pb-4">
				<h1 className="text-[40px] text-[#262525] leading-[44px] mb-5">
					{dataBlog?.title}
				</h1>
				<div className="flex items-center gap-1">
					<Image
						src={calendar}
						width={24}
						height={24}
						alt={''}
					/>
					<p>{dataBlog?.date}</p>
				</div>
			</div>
			<Image
				src={dataBlog?.image || ''}
				width={200}
				height={200}
				alt={''}
				className="w-full"
			/>
			<div className="py-4 pr-[20px] pl-[20px] md:pr-[40px] md:pl-[40px] lg:pr-[64px] lg:pl-[64px]">
				{dataBlog?.content?.map((content, index) => {
					return (
						<div key={index}>
							<p className="text-[28px] text-[#262525]">{content.subTitle}</p>
							<p className="my-[10px] text-[#666] leading-8">
								{content.subDescription}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
