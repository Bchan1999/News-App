import { useEffect, useState } from "react"

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api/news").then(
      res => console.log(res.json())
    ).then(
      data => {
        //console.log(data.json())
        setBackendData(data)

      }
    )
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <section>

      </section>
    </>
  )
}

export default App
