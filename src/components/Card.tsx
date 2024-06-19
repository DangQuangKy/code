

const Card = ({children}: {children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 justify-center items-center p-4 shadow-md rounded-md">
      {children}
    </div>
  )
}

export default Card
