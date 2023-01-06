import { PropsWithChildren } from 'react'

const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col min-h-screen dark:bg-primary-black dark:text-white">{children}</div>
}

export default PageContainer
