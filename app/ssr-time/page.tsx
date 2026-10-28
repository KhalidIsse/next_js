export const dynamic = "force-dynamic";

export default function SSRTimePage() {
  const time = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: "20px" }}>
      <h1>SSR Time Simulation</h1>
      <p>Server Rendered Time: <strong>{time}</strong></p>
      <p>💡 <em>Refresh the page to see the timestamp update instantly.</em></p>
    </div>
  );
}
