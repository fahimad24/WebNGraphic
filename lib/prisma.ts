import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { withAccelerate } from "@prisma/extension-accelerate";

const databaseUrl =
	process.env.DATABASE_URL ??
	"postgresql://user:password@localhost:5432/webngraphic";

const isAccelerateUrl =
	databaseUrl.startsWith("prisma://") ||
	databaseUrl.startsWith("prisma+postgres:");

export const prisma = isAccelerateUrl
	? (new PrismaClient({ accelerateUrl: databaseUrl }).$extends(withAccelerate()) as unknown as PrismaClient)
	: new PrismaClient({ adapter: new PrismaPg({ connectionString: databaseUrl }) });
