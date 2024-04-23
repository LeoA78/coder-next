import { NextResponse } from "next/server";
import { getOrdenanzas } from "@/app/services/directus";

export async function GET() {
  const ordenanzas = await getOrdenanzas();


  return NextResponse.json(ordenanzas);
}
