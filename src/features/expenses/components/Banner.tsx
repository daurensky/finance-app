type BannerProps = {
  image: string
}

const Banner = ({ image }: BannerProps) => {
  return (
    <div className="w-full h-[300px] relative">
      <img src={image} alt="" className="w-full h-full object-cover relative z-10" />
      <div className="bg-white/5 absolute top-0 left-0 right-0 bottom-0 animate-pulse"></div>
    </div>
  )
}

export default Banner
