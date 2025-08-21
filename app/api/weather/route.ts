export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  const type = searchParams.get("type") || "current";

  if (!city) {
    return new Response(JSON.stringify({ error: "City is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  const baseUrl = process.env.BASE_URL;
  const endpoint =
    type === "forecast"
      ? `${baseUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`
      : `${baseUrl}/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch weather data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
