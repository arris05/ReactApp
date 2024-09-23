import Card from "./Components/Card"

function App() {
  return (
    <>
      <h1 className="text-[3rem] text-center mt-8 font-bold text-orange-500 font-serif">OBI Szeghalom</h1>
      <div className="grid grid-cols-1 w-[80%] mx-auto md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
        <Card />
      </div>
    </>
  )
}

export default App
