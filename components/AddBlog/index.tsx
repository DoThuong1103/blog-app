import React, { useState } from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import FormAddBlog from './FormAddBlog'
export default function AddBlog() {
	const [openForm, setOpenFrom] = useState(false)
	const handleOpenForm = () => {
		setOpenFrom(!openForm)
	}
	return (
		<>
			<div
				className="fixed bottom-10 right-10 hover:rotate-180 transition-all"
				onClick={handleOpenForm}>
				<IoMdAddCircle
					size={50}
					className="text-blue-400 "
				/>
			</div>
			{openForm && <FormAddBlog onCloseForm={handleOpenForm} />}
		</>
	)
}
