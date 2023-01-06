import { PropsWithChildren } from 'react'

type TableHeadingProps = PropsWithChildren<{
  icon: string
}>

const TableHeading = ({ icon, children }: TableHeadingProps) => (
  <th className="border-y border-r last:border-r-0 dark:border-white/5 dark:text-white/50 px-2 py-1 font-semibold">
    <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-xl">{icon}</span>
      {children}
    </div>
  </th>
)

export default TableHeading
