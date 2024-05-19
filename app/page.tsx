import Image from "next/image";
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="w-1/2 pr-12">
            <h1 className="text-4xl font-bold mb-8">Welcome to My Website</h1>
            <p className="text-lg leading-relaxed mb-8">
              This is the text content of the left column. You can add any text or
              HTML elements here to describe your website or provide information to
              your visitors.
            </p>
            {/* Add more text content here if needed */}
        </div>

        {/* Right Column for Image */}
        <div className="w-1/2">
          <div className="relative h-full">
            <Image
              src="/your-image.jpg" // Replace with the path to your image
              alt="Image Description"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}