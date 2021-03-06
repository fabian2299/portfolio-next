import Main from '@/components/Layout/Main'
import ProjectList from '@/components/Project/ProjectList'
import useDebounce from 'hooks/useDebounce'
import { InferGetStaticPropsType } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import { clientAxios } from 'services/clientAxios'
import { IProject } from 'types'

const categoryList = [
  'view all',
  'nextjs',
  'react',
  'tailwindcss',
  'prisma',
  'redux-toolkit',
  'chakraui',
  'typescript',
]

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const debouncedValue = useDebounce<string>(searchTerm, 600)
  const [filter, setFilter] = useState('view all')
  const [filterResults, setFilterResults] = useState([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const getFilterResults = async () => {
      if (filter === '' || filter === 'all') {
        setFilterResults([])
        return
      }
      const res = await clientAxios.get(`/projects/category?filter=${filter}`)
      const data = await res.data
      setFilterResults(data)
      setSearchTerm('')
    }
    getFilterResults()
  }, [filter])

  useEffect(() => {
    const getResults = async () => {
      if (debouncedValue === '') {
        setSearchResults([])
        return
      }
      const res = await clientAxios.get(`/projects?search=${debouncedValue}`)
      const results = await res.data
      setSearchResults(results)
      setFilter('')
    }
    getResults()
  }, [debouncedValue])

  return (
    <Main title="Portfolio - Projects">
      <div className="p-10 space-y-8 border-x">
        <h2 className=" text-center text-3xl font-black text-emerald-800">
          Search by Category
        </h2>
        {/* mobile categories */}
        <select
          name="category"
          className="md:hidden rounded-lg bg-emerald-700 text-white text-xl text-center"
          onChange={(e) => setFilter(e.target.value)}
        >
          {categoryList.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* desktop categories */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 text-center mx-auto">
          {categoryList.map((category, i) => (
            <button
              className="bg-emerald-600 py-1 px-3 text-white  font-semibold rounded-lg shadow-lg shadow-emerald-500/30 text-xl"
              key={i}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* search */}
      <div className="p-3 bg-emerald-700">
        <input
          type="search"
          name="search"
          id="search"
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Projects by title..."
        />
      </div>
      {/* projects */}
      {filterResults.length > 0 && searchResults.length <= 0 && (
        <ProjectList projects={filterResults} filter={filter} />
      )}

      {searchResults.length > 0 && filterResults.length <= 0 && (
        <ProjectList projects={searchResults} filter={filter} />
      )}

      {searchResults.length <= 0 && filterResults.length <= 0 && (
        <ProjectList projects={projects} filter={filter} />
      )}
    </Main>
  )
}

export const getStaticProps = async () => {
  const res = await clientAxios.get('/projects')
  const projects = (await res.data) as IProject[]

  return {
    props: { projects },
    revalidate: 1,
  }
}
