// app/register/page.tsx
"use client";

import { useState } from "react";
import { handleFormServerAction } from "./actions";

export default function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setSuccess(false);
    setLoading(true);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await handleFormServerAction(email);
      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {success ? (
          <div style={styles.successWrapper}>
            <div style={styles.successIcon}>🎉</div>
            <h2 style={styles.title}>Success!</h2>
            <p style={styles.successText}>Thanks for submitting! Your account has been verified.</p>
          </div>
        ) : (
          <>
            <div style={styles.header}>
              <h2 style={styles.title}>Create an Account</h2>
              <p style={styles.subtitle}>Get started with your developer setup today.</p>
            </div>

            <form action={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label htmlFor="email" style={styles.label}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label htmlFor="password" style={styles.label}>Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  style={styles.input}
                />
              </div>

              {error && (
                <div style={styles.errorBanner}>
                  <span>⚠️</span> {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                style={{
                  ...styles.button,
                  ...(loading ? styles.buttonDisabled : {})
                }}
              >
                {loading ? "Creating account..." : "Get Started"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// Styling Object using Inline Styles for zero configuration
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
    maxWidth: "420px",
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
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
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
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
  },
  errorBanner: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#fef2f2",
    border: "1px solid #fee2e2",
    borderRadius: "6px",
    padding: "10px 14px",
    color: "#991b1b",
    fontSize: "14px",
    lineHeight: "1.4",
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
    transition: "background-color 0.15s ease",
    marginTop: "8px",
  },
  buttonDisabled: {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
  successWrapper: {
    textAlign: "center" as const,
    padding: "10px 0",
  },
  successIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  successText: {
    fontSize: "15px",
    color: "#4b5563",
    lineHeight: "1.5",
    margin: 0,
  },
};
