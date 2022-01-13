import Link from 'next/link'
import { BiRocket } from 'react-icons/bi'

export default function Logo() {
  return (
    <>
      <Link href="/">
        <a>
          <div className="flex space-x-3 text-white">
            <span>
              <BiRocket className="h-5 w-5" />
            </span>
            <p>Ad Astra</p>
          </div>
        </a>
      </Link>
    </>
  )
}
