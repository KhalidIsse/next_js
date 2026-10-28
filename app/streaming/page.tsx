import { Suspense } from "react";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function SlowComponent() {
  await delay(3000); 
  return (
    <div style={{ padding: "20px", background: "#e0ffe0", marginTop: "10px" }}>
      <h3>✅ Slow Component Loaded!</h3>
      <p>This content was delayed by 3 seconds using streaming.</p>
    </div>
  );
}

export default function StreamingPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Streaming & Suspense Demo</h1>
      <p>The main page layout renders immediately.</p>
      
      <Suspense fallback={<p style={{ color: "orange" }}>⏳ Loading component...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
