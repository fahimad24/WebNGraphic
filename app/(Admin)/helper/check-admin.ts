import { auth, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function getUserSession() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    await signOut(); // optional: clear any invalid session
    redirect("/sign-in-admin");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  if (!user) {
    await signOut();
    redirect("/sign-in-admin");
  }

  return { session, role: user.role };
}

export async function checkAccess() {
  try {
    const { session, role } = await getUserSession();

    if (role !== "admin" && role !== "editor") {
      await signOut();
      redirect("/sign-in-admin");
    }

    return session.user;
  } catch (error) {
    console.error("checkAccess error:", error);
    redirect("/sign-in-admin");
  }
}
export async function checkAdmin() {
  try {
    const { session, role } = await getUserSession();

    if (role !== "admin") {
      await signOut();
      redirect("/sign-in-admin");
    }

    return session.user;
  } catch (error) {
    console.error("checkAdmin error:", error);
    redirect("/sign-in-admin");
  }
}
