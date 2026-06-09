import { auth } from "@/auth";
import Image from "next/image";

export default async function Page() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-white text-white flex flex-col items-center justify-center p-8">
      <div className="bg-gray-900 bg-opacity-90 rounded-xl p-10 shadow-2xl text-center max-w-xl w-full border border-gray-700">
        {session.user.image && (
          <div className="mb-6 flex justify-center">
            <Image
              src={session.user.image}
              alt="Admin Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-indigo-500 shadow-lg"
            />
          </div>
        )}

        <h1 className="text-3xl font-bold mb-2 text-white">
          Welcome, {session.user.name}!
        </h1>
        <p className="text-indigo-300 text-lg mb-6">
          You’re in the Admin Dashboard. Let’s get things done.
        </p>

        <div className="bg-indigo-600 bg-opacity-80 p-5 rounded-md text-sm leading-relaxed text-white shadow-md">
          <p className="mb-2">✅ Manage users, roles, and system settings.</p>
          <p className="mb-2">
            📊 View reports and monitor real-time activity.
          </p>
          <p className="mb-2">
            ⚙️ Customize your admin experience with powerful tools.
          </p>
          <p>🚀 Everything you need, in one place.</p>
        </div>
      </div>
    </div>
  );
}
