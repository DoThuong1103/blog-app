import { addBlog } from '@/libs/redux/features/blog/blogSlice'
import {
	Blog,
	DELETE_FIELD,
	DeleteFieldAction,
	UPDATE_FIELD,
	UpdateFieldAction,
} from '@/utils/types'
import Image from 'next/image'
import React, { useReducer, useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { v4 as idv4 } from 'uuid'
import { TiDelete } from 'react-icons/ti'

const formReducer = (
	state: Blog,
	action: UpdateFieldAction | DeleteFieldAction
) => {
	switch (action.type) {
		case UPDATE_FIELD:
			return {
				...state,
				[action.field]: action.value,
			}
		case DELETE_FIELD:
			const updatedContent = { ...state }
			delete updatedContent[
				`subTitle${action.id}` as keyof typeof updatedContent
			]
			delete updatedContent[
				`subDescription${action.id}` as keyof typeof updatedContent
			]
			return updatedContent
		default:
			return state
	}
}

const initialFormState: Blog = {
	id: '',
	title: '',
	image: '',
	date: new Date().toString(),
	// content: [{ subTitle: '', subDescription: '' }],
}

export default function FormAddBlog({
	onCloseForm,
}: {
	onCloseForm: ({}) => void
}) {
	const dispatchRedux = useDispatch()
	const [bodyContent, setBodyContent] = useState([1])
	const [count, setCount] = useState(1)
	const [image, setImage] = useState<any>()
	const [src, setSrc] = useState('')

	const [formData, dispatch] = useReducer(formReducer, initialFormState)

	const handleAddBodyContent = () => {
		setCount(count + 1)
		setBodyContent([...bodyContent, count + 1])
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		const file = e?.target?.files?.[0]
		if (file) {
			setImage(file)
			const objectURL = URL.createObjectURL(file)
			setSrc(objectURL)
			dispatch({
				type: UPDATE_FIELD,
				field: name as keyof Blog,
				value: objectURL,
			})
		} else {
			dispatch({
				type: UPDATE_FIELD,
				field: name as keyof Blog,
				value: value,
			})
		}
	}
	// Event handler for form submission
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatchRedux(addBlog({ ...formData, id: idv4() }))
		onCloseForm(false)
	}

	const handleDeleteSubContent = (id: number) => {
		setBodyContent(bodyContent.filter((item) => item !== id))
		setCount(count - 1)
		dispatch({
			type: DELETE_FIELD,
			id: id,
		})
	}
	return (
		<div className="fixed w-[100vw] h-[100vh] top-0 left-0">
			<div
				className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-slate-300 bg-opacity-50"
				onClick={() => onCloseForm(false)}></div>
			<div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg w-[90vw]  md:w-[50vw] h-[50vh] rounded-lg bg-white py-8 px-12 overflow-hidden overflow-y-auto">
				<span className="mx-auto">Add new Blog</span>
				<div>
					<form
						id="myForm"
						onSubmit={handleSubmit}
						action=""
						className="flex flex-col gap-4">
						<div className="flex flex-col">
							<input
								type="text"
								name="title"
								id="title"
								placeholder="Enter title"
								className="border outline-none resize-none px-2 py-[2px]"
								value={formData.title}
								onChange={handleInputChange}
								required
								autoComplete="off"
							/>
						</div>
						<div className="flex flex-col w-full cursor-pointer border border-[#ccc] px-2 py-1 rounded-sm">
							<label htmlFor="image">
								{/* <span className="cursor-pointer">Add new Image</span> */}
								<input
									type="file"
									name="image"
									id="image"
									// className="hidden"
									accept="image/*"
									onChange={handleInputChange}
									required
								/>
							</label>
						</div>
						{src && (
							<Image
								src={src}
								alt="Picture of the author"
								width={200}
								height={200}
							/>
						)}
						<div className="flex flex-col gap-4">
							{bodyContent?.map((subContent: number, index: number) => (
								<div
									className="relative flex flex-col gap-2 group"
									key={index}>
									<input
										type="text"
										name={`subTitle${subContent}`}
										id="title"
										placeholder={`Enter subTitle${subContent}`}
										className="border outline-none resize-none px-2 py-[2px]"
										onChange={handleInputChange}
										required
										autoComplete="off"
									/>
									<input
										name={`subDescription${subContent}`}
										id=""
										placeholder={`Enter subDescription${subContent}`}
										onChange={handleInputChange}
										className="border outline-none resize-none px-2 py-[2px]"
										required
										autoComplete="off"
									/>
									<TiDelete
										size={30}
										className="absolute group-first:hidden -top-4 -right-4 text-red-400 cursor-pointer"
										title="Delete "
										onClick={() => handleDeleteSubContent(subContent)}
									/>
								</div>
							))}
						</div>

						<IoMdAddCircle
							size={30}
							className="text-blue-400 cursor-pointer"
							title="Add "
							onClick={() => handleAddBodyContent()}
						/>
						<input
							className="bg-blue-400 px-4 py-1 rounded text-white hover:bg-opacity-80 transition-all"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</div>
		</div>
	)
}
