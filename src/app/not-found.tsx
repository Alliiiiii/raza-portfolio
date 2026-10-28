import Link from "next/link";
export default function NotFound() {
  return <main className="grid min-h-screen place-items-center text-center"><div><p className="eyebrow">404</p><h1 className="my-4 text-5xl font-bold">Signal lost.</h1><Link href="/" className="btn btn-p">Back home</Link></div></main>;
}
