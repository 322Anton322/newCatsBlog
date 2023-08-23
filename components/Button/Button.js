'use client'
import {useState} from "react";

function Button({  }) {

  const [result, setResult] = useState("");

  const revalidate = async () => {
    await fetch("/api/revalidate?tag=collection", {
      method: "POST",
    });
    setResult("Done. Try to refresh the page");
  }

  return (
    <div className="root">
      <div>{result}</div>
      <div className="actions">
        <button className='flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => { revalidate()}}>Revalidate</button>
        <a href="">Refresh</a>
      </div>

    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  return {
    props: {
      timestamp: new Date().toISOString()
    },
  }
}

export default Button
