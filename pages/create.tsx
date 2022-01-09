import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { stringToSlug } from 'lib'
import { clientAxios } from 'services/clientAxios'
import Main from '@/components/layout/Main'
import { getSession } from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Session } from 'next-auth'

type CreatePageProps = {
  session: Session | null
}
export const getServerSideProps: GetServerSideProps<CreatePageProps> = async ({
  req,
}) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default function CreatePage({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const updateSlug = router.query.slug

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

  const updateTask = async () => {
    try {
      const project = { ...values, slug }
      await clientAxios.patch(`/projects/${updateSlug}`, project)
    } catch (error) {
      console.log(error)
    }
  }

  const submitData = async (e: any) => {
    e.preventDefault()
    try {
      const project = { ...values, image, slug }
      await clientAxios.post('projects', project)
    } catch (error) {
      console.error(error)
    }
    if (updateSlug) {
      await updateTask()
    }
    await router.push('/')
  }

  const getTask = useCallback(async () => {
    try {
      const res = await clientAxios.get(`/projects/${updateSlug}`)
      const data = await res.data

      setValues({
        title: data.title,
        content: data.content,
        githubUrl: data.githubUrl,
        deployedUrl: data.deployedUrl,
        categories: data.categories,
      })
    } catch (error) {
      console.log(error)
    }
  }, [updateSlug])

  useEffect(() => {
    if (updateSlug) {
      getTask()
    } else {
      setValues({
        title: '',
        content: '',
        githubUrl: '',
        deployedUrl: '',
        categories: '',
      })
    }
  }, [updateSlug, getTask])

  const notValid = Object.values(values).includes('')

  return (
    <Main title="Create">
      <div className="py-10 hidden md:block">
        <h1 className="text-4xl text-emerald-800 text-center font-bold">
          {updateSlug ? 'Update Project' : 'Create a Project'}
        </h1>

        <form
          className="space-y-5 mt-10 max-w-4xl mx-auto"
          onSubmit={submitData}
        >
          <div className="flex space-x-5">
            <div className="flex flex-col flex-1 space-y-5">
              <label
                className="text-2xl font-bold text-emerald-800"
                htmlFor="title"
              >
                Title
              </label>
              <input
                autoFocus
                id="title"
                name="title"
                onChange={handleChange}
                placeholder="write a title"
                type="text"
                value={values.title}
                className="rounded-lg text-slate-700"
              />
            </div>

            <div className="flex flex-col space-y-5 flex-1">
              <label
                className="text-2xl font-bold text-emerald-800"
                htmlFor="categories"
              >
                Categories
              </label>
              <input
                id="categories"
                name="categories"
                onChange={handleChange}
                placeholder="write categories"
                type="text"
                value={values.categories}
                className="rounded-lg text-slate-700"
              />
            </div>
          </div>

          {!updateSlug && (
            <div className=" space-y-5 flex flex-col">
              <label
                className="text-2xl font-bold text-emerald-800"
                htmlFor="file"
              >
                File
              </label>
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                name="file"
                className="file:rounded-lg file:bg-emerald-800 file:text-slate-100 file:mr-4 file:cursor-pointer"
              />
            </div>
          )}

          <div className="flex flex-col space-y-5">
            <label
              className="text-2xl font-bold text-emerald-800"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              rows={10}
              cols={10}
              onChange={handleChange}
              placeholder="write a description"
              value={values.content}
              className="rounded-lg text-slate-700 p-2"
            />
          </div>

          <div className="flex flex-col space-y-5">
            <label
              className="text-2xl font-bold text-emerald-800"
              htmlFor="deployedUrl"
            >
              Deployed Url
            </label>
            <input
              id="deployedUrl"
              name="deployedUrl"
              onChange={handleChange}
              placeholder="deploy url"
              type="text"
              value={values.deployedUrl}
              className="rounded-lg text-slate-700"
            />
          </div>

          <div className="flex flex-col space-y-5">
            <label
              className="text-2xl font-bold text-emerald-800"
              htmlFor="githubUrl"
            >
              Github Url
            </label>
            <input
              id="githubUrl"
              name="githubUrl"
              onChange={handleChange}
              placeholder="github url"
              type="text"
              value={values.githubUrl}
              className="rounded-lg text-slate-700"
            />
          </div>

          <div className="flex flex-col space-y-5">
            <label
              className="text-2xl font-bold text-emerald-800"
              htmlFor="slug"
            >
              Slug
            </label>
            <input
              id="slug"
              name="slug"
              type="text"
              value={slug}
              readOnly
              className="rounded-lg text-slate-700 cursor-not-allowed"
            />
          </div>

          <input
            disabled={notValid}
            type="submit"
            value={`${updateSlug ? 'Update Project' : 'Create Project'}`}
            className={`${
              notValid ? 'bg-emerald-600/70' : 'bg-emerald-800'
            }  text-white p-2 rounded-lg cursor-pointer`}
          />

          <button
            type="button"
            className=" ml-4 bg-red-400 text-white p-2 rounded-lg"
            onClick={() => router.push('/')}
          >
            or Cancel
          </button>
        </form>
      </div>
    </Main>
  )
}
