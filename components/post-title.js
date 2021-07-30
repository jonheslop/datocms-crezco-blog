export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl leading-tight md:leading-none mb-12 text-center md:text-left max-w-5xl">
      {children}
    </h1>
  )
}
