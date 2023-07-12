import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link';
import { Fragment, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import EditRecipeForm from './EditRecipeForm';

const RecipeModalEdit = ({ title, instructions, ingredients, image, handleClose, recipeId, refresh }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = async () => {
    await fetch(`/api/recipe/delete`, {
        method: "POST",
        body: JSON.stringify({recipeId: recipeId }),
    })

    refresh()
    handleClose()
  }

  return (
    <>
        <Transition appear show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child as={Fragment} enter="ease-out duration-300"
                enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200"
                leaveFrom="opacity-100" leaveTo="opacity-0"
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                {!isEditing ? 
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child as={Fragment} enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative md:w-1/2 w-full overflow-x-auto max-h-[90vh] overflow-y-auto tarnsform rounded-2xl bg-white p-6 text-left shadow-gray-500 shadow-xl transition-all flex flex-col gap-5">
                            <button type="button" onClick={handleClose} className='absolute top-2 right-2 z-10 w-fit p-2 bg-amber-500 rounded-full'>
                                <Image src="/close.png" alt="close" width={20} height={20} className='object-contain' />
                            </button>

                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='relative w-full mx-auto h-52 bg-[url("/pattern.jpg")] bg-cover bg-center rounded-lg'>
                                    <Image src={`${image}`} alt="food image" fill priority className="object-contain" />
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col gap-2'>
                                <h2 className='font-bold text-xl text-white bg-gradient-to-r py-3 px-6 mx-auto rounded-full from-amber-700 to-orange-400 capitalize'>
                                    {title}
                                </h2>

                                <div className='mt-3 flex flex-wrap gap-4 capitalize text-stone-700'>
                                    <b>Ingredients: </b>{ingredients}
                                </div>

                                <div className='mt-3 flex flex-col gap-3 text-stone-700'>
                                    <b>Instructions: </b> <div><ReactMarkdown>{instructions}</ReactMarkdown></div>
                                </div>

                                <div className='flex-between mt-6'>
                                    <button onClick={() => setIsEditing(true)} className='bg-purple-600 px-4 py-2 text-white rounded-xl flex-center gap-2'>
                                        <Image src='/edit.png' width={20} height={20} alt="edit icon" /> Edit
                                    </button>

                                    <button onClick={handleDelete} className={`bg-red-500 px-4 py-2 text-white rounded-xl flex-center gap-2`}>
                                        <Image src='/trash.png' width={20} height={20} alt="trash icon" /> Delete
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                :
                    <EditRecipeForm preTitle={title} finalizeEdit={() => setIsEditing(false)} preInstructions={instructions} preIngredients={ingredients} image={image} recipeId={recipeId} refresh={refresh} handleDelete={handleDelete} handleClose={() => {handleClose(); refresh();}} />
                }
            </Dialog>
        </Transition>
    </>
  )
}

export default RecipeModalEdit