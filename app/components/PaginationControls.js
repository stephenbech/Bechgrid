'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import {HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi'
    
const PaginationControls = (
  {
    hasNextPage,
    hasPrevPage,
    totalItems,
    totalPages
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '15'
  const maxPagesToShow = 5;
      // const totalPages = Math.ceil(totalItems / Number(per_page))

      // if (page >= hasNextPage) {
      //       return null;
      //     }

      let startPage = Math.max(1, page - 1);
      let endPage = Math.min(totalPages, startPage + 4);
      if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
      }
  return (
    <div className='flex justify-center gap-2'>
      <button
        className='hover:text-blue-500 flex space-x-2 text-center text-xl text-black font-extrabold'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/gallery?page=${Number(page) - 1}&per_page=${per_page}`)
        }}> 
        <div className='text-center '>
             <HiArrowNarrowLeft/>
        </div>
        <span>Previous</span>
      </button>

      {endPage >= startPage && [...Array(Math.max(maxPagesToShow,endPage - startPage + 1))].map((_, i) => {
            const pageNumber = startPage + i;
            if (pageNumber > totalPages) {
            return null; // Don't render a button for this page number
            }
            return (
            <button className='hover:text-blue-500 font-extrabold text-xl hover:underline' key={i} onClick={() => {
                  router.push(`/gallery?page=${pageNumber}&per_page=${per_page}`)
            }}>
                  {pageNumber}
            </button>
            );
            })}

      <button
        className='hover:text-blue-500 text-xl flex space-x-2 text-center font-extrabold text-black'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/gallery?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
      <span>Next</span>
      <div className='text-center '>
              <HiArrowNarrowRight />
      </div>
      </button>
    </div>
  )
}

export default PaginationControls
