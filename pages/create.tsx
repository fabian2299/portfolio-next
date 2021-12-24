import { ChangeEvent, useEffect, useState } from 'react'
import Router from 'next/router'
import { stringToSlug } from 'lib'
import { clientAxios } from 'services/clientAxios'

export default function CreatePage() {
  const [slug, setSlug] = useState('')
  const [image, setImage] = useState('')
  const [values, setValues] = useState({
    title: '',
    content: '',
    githubUrl: '',
    deployedUrl: '',
    categories: '',
  })

  useEffect(() => {
    const handleSlugChange = () => {
      const slugValue = stringToSlug(values.title)
      setSlug(slugValue)
    }
    handleSlugChange()
  }, [values.title])

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e?.target?.files?.[0]
    const formData = new FormData()
    formData.append('file', imageFile!)
    try {
      const headers = { 'Content-Type': 'multipart/form-data' }
      const res = await clientAxios.post(`/fileUpload`, formData, { headers })
      const data = await res.data
      const imageValue = data.image.src
      setImage(imageValue)
    } catch (error) {
      console.log(error)
    }
  }

  const submitData = async (e: any) => {
    e.preventDefault()
    try {
      const project = { ...values, image, slug }
      await clientAxios.post('projects', project)
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const notValid = Object.values(values).includes('')

  return (
    <div className="py-10">
      <h1 className="text-2xl text-center font-bold">Create a Project</h1>
      <form className="space-y-5 mt-10 max-w-xl mx-auto" onSubmit={submitData}>
        <div className="flex flex-col space-y-5">
          <label htmlFor="title">Title</label>
          <input
            autoFocus
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="write a title"
            type="text"
            value={values.title}
          />
        </div>

        <div className="flex flex-col space-y-5">
          <label htmlFor="categories">Categories</label>
          <input
            id="categories"
            name="categories"
            onChange={handleChange}
            placeholder="write categories"
            type="text"
            value={values.categories}
          />
        </div>

        <div className=" space-y-5 flex flex-col">
          <label htmlFor="file">File</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            name="file"
          />
        </div>

        <div className="flex flex-col space-y-5">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows={10}
            cols={10}
            className="p-2"
            onChange={handleChange}
            placeholder="write a description"
            value={values.content}
          />
        </div>

        <div className="flex flex-col space-y-5">
          <label htmlFor="deployedUrl">Deployed Url</label>
          <input
            id="deployedUrl"
            name="deployedUrl"
            onChange={handleChange}
            placeholder="deploy url"
            type="text"
            value={values.deployedUrl}
          />
        </div>

        <div className="flex flex-col space-y-5">
          <label htmlFor="githubUrl">Github Url</label>
          <input
            id="githubUrl"
            name="githubUrl"
            onChange={handleChange}
            placeholder="write a title"
            type="text"
            value={values.githubUrl}
          />
        </div>

        <div className="flex flex-col space-y-5">
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" type="text" value={slug} readOnly />
        </div>

        <input
          disabled={notValid}
          type="submit"
          value="Create Project"
          className={`${
            notValid ? 'bg-emerald-600/70' : 'bg-emerald-800'
          }  text-white p-2 rounded-lg cursor-pointer`}
        />

        <button
          type="button"
          className=" ml-4 bg-red-400 text-white p-2 rounded-lg"
          onClick={() => Router.push('/')}
        >
          or Cancel
        </button>
      </form>
    </div>
  )
}
