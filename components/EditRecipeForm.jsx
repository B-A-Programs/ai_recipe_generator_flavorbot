import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'

const EditRecipeForm = ({ preTitle, finalizeEdit, preInstructions, preIngredients, refresh, handleDelete, recipeId, handleClose, image }) => {
    const [ingredients, setIngredients] = useState(preIngredients)
    const [instructions, setInstructions] = useState(preInstructions)
    const [title, setTitle] = useState(preTitle)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch(`/api/recipe/update`, {
            method: "POST",
            body: JSON.stringify({ recipeId: recipeId, title: title, instructions: instructions, ingredients: ingredients }),
        })

        await refresh()
        finalizeEdit()
    }

    return (
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
            <Transition.Child as={Fragment} enter="ease-out duration-300"
                enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200"
                leaveFrom="opacity-100" leaveTo="opacity-0"
            >
                <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>
            <form className='fixed inset-0 overflow-y-auto' onSubmit={handleSubmit}>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child as={Fragment} enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative w-1/2 overflow-x-auto max-h-[90vh] overflow-y-auto tarnsform rounded-2xl bg-white p-6 text-left shadow-gray-500 shadow-xl transition-all flex flex-col gap-5">
                            <button type="button" onClick={handleClose} className='absolute top-2 right-2 z-10 w-fit p-2 bg-amber-500 rounded-full'>
                                <Image src="/close.png" alt="close" width={20} height={20} className='object-contain' />
                            </button>

                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='relative w-full mx-auto h-52 bg-[url("/pattern.jpg")] bg-cover bg-center rounded-lg'>
                                    <Image src={`${image}`} alt="food image" fill priority className="object-contain" />
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col gap-2'>
                                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className='search-cuisine__input border border-gray-400 text-center mx-auto' />

                                <div className='mt-3 flex flex-wrap gap-4 capitalize text-stone-700'>
                                    <b>Ingredients: </b>

                                    <textarea className='w-full border border-gray-400' value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                                </div>

                                <div className='mt-3 flex flex-col gap-3 text-stone-700'>
                                    <b>Instructions: </b>

                                    <textarea className='w-full h-60 border border-gray-400' value={instructions} onChange={(e) => setInstructions(e.target.value)} />
                                </div>

                                <div className='flex-between mt-6'>
                                    <button type="submit" className='bg-green-600 px-4 py-2 text-white rounded-xl flex-center gap-2'>
                                        <Image src='/check.png' width={20} height={20} alt="check icon" /> Save edit
                                    </button>

                                    <p className='text-gray-500'><b>Hint:</b> use <a href="https://www.markdownguide.org/" className='text-blue-400 underline'>markup language</a> to format instructions, step by step.</p>

                                    <button onClick={handleDelete} className={`bg-red-500 px-4 py-2 text-white rounded-xl flex-center gap-2`}>
                                        <Image src='/trash.png' width={20} height={20} alt="trash icon" /> Delete
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </form>
        </Dialog>
    )
}

export default EditRecipeForm