import expenses from '../data/expenses.json'
import Banner from '../features/expenses/components/Banner'
import TableHeading from '../features/expenses/components/TableHeading'
import User from '../features/expenses/components/User'
import PageContainer from '../layouts/PageContainer'
import getLocalizedDate from '../utils/getLocalizedDate'

const Expenses = () => {
  return (
    <PageContainer>
      <Banner image="https://w.wallhaven.cc/full/l8/wallhaven-l83o92.jpg" />

      <div className="max-w-screen-2xl w-full mx-auto py-8 px-4">
        <h1 className="text-3xl font-montserrat font-bold dark:text-gray-200 mb-8">Затраты август</h1>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <TableHeading icon="abc">Название</TableHeading>
              <TableHeading icon="payments">Цена</TableHeading>
              <TableHeading icon="sell">Теги</TableHeading>
              <TableHeading icon="calendar_month">Дата</TableHeading>
              <TableHeading icon="group" />
            </tr>
          </thead>
          <tbody>
            {expenses.map(({ name, price, tags, date, users }, i) => (
              <tr className="dark:text-gray-300" key={i}>
                <td className="border-y border-r dark:border-white/5 py-1 px-2 font-semibold">{name}</td>
                <td className="border-y border-r dark:border-white/5 py-1 px-2 text-right">{price}</td>
                <td className="border-y border-r dark:border-white/5 py-1 px-2">
                  {tags.map(({ name }) => name).join(', ')}
                </td>
                <td className="border-y border-r dark:border-white/5 py-1 px-2">{getLocalizedDate(date)}</td>
                <td className="border-y dark:border-white/5 py-1 px-2">
                  <div className="flex gap-2">
                    {users.map(({ id, image, name }) => (
                      <User image={image} name={name} key={id} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  )
}

export default Expenses
