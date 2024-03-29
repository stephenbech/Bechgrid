'use client';
import {Circles} from 'react-loader-spinner';
import { useState} from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
      const [search, setSearch] = useState('')
      const router = useRouter()

      const handleSubmit = (e) => {
            e.preventDefault()
           router.push(`/results/${search}`)
            setSearch('')     
      }



      return (
            <form className="flex justify-center md:justify-between" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search'
                    className="bg-white p-2 w-[260px] sm:w-80 text-sm rounded-xl text-black"
                />
            </form>
      )
}