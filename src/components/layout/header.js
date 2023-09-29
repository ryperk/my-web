import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-4xl mx-auto border-b border-b-gray-900 py-10">
      <div className="flex justify-between items-center">
        {/* <h1 className="font-bold text-5xl text-gray-100 font-serif">R</h1> */}
        <div className="flex flex-row gap-10">
          <Link href="/" className=" text-gray-400 font-sans active:text-gray-100">home</Link>
          <Link href="/works" className=" text-gray-400 font-sans">works</Link>
          <Link href="/contact" className=" text-gray-400 font-sans">contact</Link>
        </div>
      </div>
    </div>
  )
}
