
import About from './components/about';

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex flex-col">
      <div className="flex-1 bg-gray-800 p-6 m-2 rounded-lg shadow-md">
        <About/>
      </div>
      <div className="flex-1 bg-gray-800 p-6 m-2 rounded-lg shadow-md">
        <h1 className="text-white">Container 2</h1>
      </div>
      <div className="flex-1 bg-gray-800 p-6 m-2 rounded-lg shadow-md">
        <h1 className="text-white">Container 3</h1>
      </div>
      <div className="flex-1 bg-gray-800 p-6 m-2 rounded-lg shadow-md">
        <h1 className="text-white">Container 4</h1>
      </div>
      <div className="flex-1 bg-gray-800 p-6 m-2 rounded-lg shadow-md">
        <h1 className="text-white">Container 5</h1>
      </div>
      <div className="flex-1 bg-gray-800 p-6 m-2 rounded-lg shadow-md">
        <h1 className="text-white">Container 6</h1>
      </div>
    </main>
  );
}
