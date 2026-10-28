"use client";

import { useState } from "react";

export default function GreetingForm() {
  const [greeting, setGreeting] = useState<string | null>(null);

  function handleSubmit(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    if (firstName && lastName) {
      setGreeting(`Hello, ${firstName.trim()} ${lastName.trim()}! from server`);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Dynamic Greeting</h2>
          <p style={styles.subtitle}>Enter your details to generate a server handshake message.</p>
        </div>
        
        <form action={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="firstName" style={styles.label}>First Name</label>
              <input 
                id="firstName" 
                name="firstName" 
                type="text" 
                placeholder="Jane"
                required 
                style={styles.input} 
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="lastName" style={styles.label}>Last Name</label>
              <input 
                id="lastName" 
                name="lastName" 
                type="text" 
                placeholder="Doe"
                required 
                style={styles.input} 
              />
            </div>
          </div>

          <button type="submit" style={styles.button}>Greet Me</button>
        </form>

        {greeting && (
          <div style={styles.greetingBanner}>
            <div style={styles.waveIcon}>👋</div>
            <h3 style={styles.greetingText}>{greeting}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

// Styling Object using Inline Styles for zero configuration layout parity
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)",
    width: "100%",
    maxWidth: "460px",
    padding: "40px 32px",
    boxSizing: "border-box" as const,
  },
  header: {
    marginBottom: "28px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 8px 0",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    margin: 0,
    lineHeight: "1.4",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  row: {
    display: "flex",
    gap: "16px",
    width: "100%",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
    flex: 1,
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box" as const,
  },
  button: {
    width: "100%",
    backgroundColor: "#111827",
    color: "#ffffff",
    padding: "12px 16px",
    fontSize: "15px",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "8px",
  },
  greetingBanner: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0fdf4",
    border: "1px solid #bbf7d0",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "24px",
    textAlign: "center" as const,
    animation: "fadeIn 0.3s ease",
  },
  waveIcon: {
    fontSize: "32px",
    marginBottom: "8px",
  },
  greetingText: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#166534",
    margin: 0,
  },
};
