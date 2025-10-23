// src/components/Content.js
import { useState } from "react";

function Content() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted name: " + (name || "—empty—"));
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interactive Counter</h2>
        <p className="text-lg mb-4">Current Count: <span className="font-bold">{count}</span></p>
        <div>
          <button onClick={() => setCount(c => c + 1)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2">Increment</button>
          <button onClick={() => setCount(c => c - 1)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2">Decrement</button>
          <button onClick={() => setCount(0)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">Reset</button>
        </div>
      </section>

      <section className="bg-white rounded shadow p-6">
        <h3 className="text-xl font-medium mb-3">Simple Form (validation)</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              placeholder="Type your name"
            />
          </div>
          <div className="flex justify-between items-center">
            <small className="text-gray-500">We will alert the submitted name.</small>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Content;
