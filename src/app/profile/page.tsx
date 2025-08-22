import Image from "next/image";

export default function Profile() {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 flex items-center justify-center">
      <div className="max-w-xl w-full flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md">
        <div className="flex items-center space-x-6 justify-center">
          <Image 
            src="https://avatar.iran.liara.run/public/35"
            alt="Profile"
            className="rounded-full object-cover"
            width={128}
            height={128}
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Software Developer</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2 text-gray-700">
            <p>Email: john.doe@example.com</p>
            <p>Location: New York, USA</p>
            <p>GitHub: @johndoe</p>
          </div>
        </div>
      </div>
    </div>
  )
}
