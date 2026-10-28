"use server";

export async function handleFormServerAction(email: string) {
  console.log(`[SERVER LOG] New registration received for: ${email}`);
}
