import Image from "next/image"

export default function Home() {
  return (
    <div className='text-rose-500 text-2xl flex justify-center items-center'>

      <Image
        className=" flex items-center"
        height={100}
        width={100}
        alt="Avatar"
        src='/images/loading.gif'
      />
    </div>
  )
}
