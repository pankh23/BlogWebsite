import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

  const {page, handlePageChange, totalPages}=useContext(AppContext)

  return (
    <div className='w-full flex justify-center items-center border-2 border-black fixed bottom-0 bg-blue-100'>

      <div className='flex justify-between w-11/12 max-w-[900px] py-2'>

        <div className='flex gap-x-2'>

              { page>1 &&

              (<button onClick={()=>handlePageChange(page-1)}
              className='rounded-md border border-black px-3 py-1 bg-blue-200'
              >
                Previous
              </button>)
              }

              {
              page<totalPages &&

              (<button onClick={()=>handlePageChange(page+1)}
              className='rounded-md border border-black px-3 py-1 bg-blue-200'
              >

                Next
              </button>

              )
              }
        </div>
        
        <p className='font-bold text-sm py-1'>

          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}
