import Image from "next/image";
export default function WebDevTechnology() {
  return (
    <div>
      <section
        id="technologies"
        className="w-full py-12 md:py-20 px-5 md:px-12  bg-Mbg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl/tight">
                Technologies We Use
              </h2>
              <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We leverage cutting-edge technologies to build fast, scalable,
                and maintainable web solutions.
              </p>
            </div>
          </div>

          <div className="mx-auto grid  grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/nextjs.svg"
                    alt="nextjs"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">Next.js</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/react.svg"
                    alt="react"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">React</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-500  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/tailwindcss.svg"
                    alt="tailwindcss"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">
                  Tailwind CSS
                </h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/postgresql.svg"
                    alt="postgresql"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">PostgreSQL</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/mongodb.svg"
                    alt="mongodb"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">MongoDB</h3>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-500  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/nodejs.svg"
                    alt="nodejs"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">Node.js</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/express.svg"
                    alt="express"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">Express.js</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/typescript.svg"
                    alt="typescript"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">TypeScipt</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-500  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/graphql.svg"
                    alt="graphql"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">GraphQL</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/prisma.svg"
                    alt="prisma"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">Prisma</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/firebase.svg"
                    alt="firebase"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">Firebase</h3>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-500  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex group-hover:scale-105 cursor-pointer duration-200 transition-all relative flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <div className="h-8 w-8 relative overflow-hidden">
                  <Image
                    src="/svg/wordpress.svg"
                    alt="wordpress"
                    width={40}
                    height={40}
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-center text-lg font-medium">WordPress</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
