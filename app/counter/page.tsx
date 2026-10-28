import Counter from "@/components/Counter";

export default function CounterPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter Exercise</h1>
      <p>This paragraph is rendered on the server.</p>
      {/* Client component instantiated inside a server component */}
      <Counter />
    </div>
  );
}
