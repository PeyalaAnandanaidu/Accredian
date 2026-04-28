// This file creates a Next.js API Route at: POST /api/leads
// In App Router, API routes live in app/api/[path]/route.ts
// The filename must be route.ts
// Export named functions for HTTP methods: GET, POST, PUT, DELETE

import { NextRequest, NextResponse } from "next/server";
// NextRequest: extends the standard Request with Next.js features
// NextResponse: extends Response with helpers like NextResponse.json()

// Define the expected shape of incoming data
interface LeadData {
  name: string;
  email: string;
  company: string;
  phone: string;
  teamSize?: string;  // ? = optional field
  message?: string;
}

// This function handles POST requests to /api/leads
// Named export "POST" tells Next.js: "run this for POST requests"
// Other HTTP methods are ignored unless you export them too
export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    // request.json() is async — it reads the request body stream
    const body: LeadData = await request.json();

    // SERVER-SIDE VALIDATION
    // Never trust client data — always validate on the server too
    if (!body.name || !body.email || !body.company || !body.phone) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
        // 400 = Bad Request (client sent invalid data)
      );
    }

    // Email format validation on server
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // =====================================================
    // IN A REAL APP, you would:
    // 1. Save to database: await db.leads.create({ data: body })
    // 2. Send email notification: await sendEmail(body.email)
    // 3. Add to CRM: await crm.contacts.create(body)
    // =====================================================
    
    // For this mock: simulate async database operation
    await new Promise((resolve) => setTimeout(resolve, 800));
    // Simulates 800ms database write delay
    // await pauses execution until the Promise resolves

    // Create a response object with the saved lead data
    const savedLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      // Generate a pseudo-unique ID using timestamp + random string
      ...body,
      createdAt: new Date().toISOString(),
      // ISO 8601 format: "2024-01-15T10:30:00.000Z"
    };

    // Log to console (server logs, visible in terminal)
    console.log("📧 New lead captured:", savedLead);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        data: savedLead,
      },
      { status: 201 }
      // 201 = Created (resource was successfully created)
    );

  } catch (error) {
    // Catch any unexpected errors (JSON parse failure, etc.)
    console.error("Error processing lead:", error);
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
      // 500 = Internal Server Error
    );
  }
}

// GET handler — returns all leads (mock)
// In production, this would require authentication
export async function GET() {
  // Mock data — simulating a database query
  const mockLeads = [
    {
      id: "lead_1",
      name: "Sample User",
      email: "sample@company.com",
      company: "Sample Corp",
      phone: "+91 98765 43210",
      createdAt: new Date().toISOString(),
    },
  ];

  return NextResponse.json({
    success: true,
    data: mockLeads,
    total: mockLeads.length,
  });
}