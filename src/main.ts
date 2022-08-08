import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

const port = Deno.env.get("PORT") || "8000";
const PORT = parseInt(port, 10);

function handler(_req: Request): Response {
  return new Response("Hello, World!");
}

console.log("Listening on http://localhost:8000");

serve(handler, { port: PORT });
