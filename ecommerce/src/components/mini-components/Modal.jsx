import React from 'react'

export const Modal = ({title, comment,toggle}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-lg p-4 w-96">
            {/* Modal content */}
            <h2 className="text-2xl font-optional font-bold mb-2">{title}</h2>
            <p className="text-gray-600 font-secondary">{comment}</p>
            <div className="mt-4 flex justify-end">
            <button
                className="px-4 py-2 bg-primary text-secondary rounded hover:bg-secondary hover:text-primary"
                onClick={toggle}>
                Close
            </button>
            </div>
        </div>
    </div>
  )
}

export default Modal