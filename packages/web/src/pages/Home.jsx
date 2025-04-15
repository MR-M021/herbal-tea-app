import { getTeaMessage } from 'shared'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p>{getTeaMessage()}</p>
    </div>
  )
}
