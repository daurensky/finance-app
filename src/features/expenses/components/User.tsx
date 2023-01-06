type UserProps = {
  image: string
  name: string
}

const User = ({ image, name }: UserProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <span>{name}</span>
    </div>
  )
}

export default User
