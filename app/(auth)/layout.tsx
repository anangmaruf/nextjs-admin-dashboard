export default function AuthLayout({ children, } : {
  children: React.ReactNode
}) {
  return (
    <section className="relative flex w-full h-screen items-center justify-center">
      {children}
    </section>
  )
}