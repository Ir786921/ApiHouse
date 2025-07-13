import APIDocumentation from "@/Component/docs";

  export const metadata = {
  title: "API Documentation | API House",
  description: "Explore free dummy APIs, endpoints, and usage guides to build and test your applications easily.",
  keywords: [
    "api documentation",
    "dummy api docs",
    "rest api guide",
    "api testing tools",
    "api playground",
    "postman ready",
    "mock data"
  ],
  openGraph: {
    title: "API Documentation | API House",
    description: "Detailed API documentation with request/response examples for developers and testers.",
    url: "https://api-house-delta.vercel.app/docs",
    type: "website",
    images: [
      {
        url: "https://api-house-delta.vercel.app/og-docs.jpg",
        width: 1200,
        height: 630,
        alt: "API Docs Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Documentation | API House",
    description: "Quick and easy access to API endpoints with dummy data. Perfect for testing your frontend.",
    images: ["https://api-house-delta.vercel.app/og-docs.jpg"],
  },
  metadataBase: new URL("https://api-house-delta.vercel.app"),

};


export default function DocsPage(){

    return(
     <>
      <div>
      <APIDocumentation/>
        
        </div>
     </>
    )
}