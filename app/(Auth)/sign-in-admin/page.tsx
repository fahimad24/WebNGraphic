import { auth, signIn, signOut } from "@/auth";

import Image from "next/image";
import Link from "next/link";

export default async function SignUp() {
  const session = await auth();

  if (session?.user)
    return (
      <section className="bg-[#16152f] h-[100vh] flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
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
          <h2 className="text-muted text-lg">
            User Role : {session.user.role}
          </h2>

          {session.user.role !== "user" && (
            <Link href={"/admin"}>
              <button
                type="submit"
                className="flex  justify-center z-10 gap-5 cursor-pointer overflow-hidden border-2 group-hover:shadow-lg group-hover:shadow-[#32306d] border-gray-400 p-4 relative rounded-full text-white font-bold before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-linear-115 before:from-[#4f4cad] before:to-[#64E9FF] before:transition-all before:duration-500 before:-z-1 clip-path-custom
    "
                title="Google"
              >
                <span>Dashboard</span>
              </button>
            </Link>
          )}

          <form
            className="group beforeForm"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="flex justify-center z-10 gap-5 cursor-pointer overflow-hidden border-2 group-hover:shadow-lg group-hover:shadow-[#32306d] border-gray-400 p-4 relative rounded-full text-white font-bold before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-linear-115 before:from-[#4f4cad] before:to-[#64E9FF] before:transition-all before:duration-500 before:-z-1 clip-path-custom
    "
              title="Google"
            >
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </section>
    );
  return (
    <section className="bg-[#16152f] min-h-screen flex justify-center items-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Admin Sign Up
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          This portal is restricted to administrators only. Please continue with
          your Google account to proceed.
        </p>

        <form
          className="flex justify-center"
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            type="submit"
            title="Google"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full font-semibold cursor-pointer text-white bg-gradient-to-r from-[#4f4cad] to-[#64E9FF] hover:shadow-lg hover:shadow-[#32306d]/50 transition duration-300"
          >
            <Image src="/google.png" alt="Google" width={25} height={20} />
            <span>Continue with Google</span>
          </button>
        </form>
      </div>
    </section>
  );
}
