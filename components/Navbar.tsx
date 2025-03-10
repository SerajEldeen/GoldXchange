import Image from "next/image";
import { auth, signIn, signOut } from "@/app/lib/auth";

async function Navbar() {
  const session = await auth();
  return (
    <nav className="bg-tertiary w-full h-[20hv] sm:h-[10vh]">
      {session && session?.user ? (
        <>
          <div className="flex justify-between sm:flex-row flex-col-reverse items-center p-5">
            <div className="flex gap-2">
              <h1 className="text-white font-poppins text-lg font-semibold">
                Sign<span className="text-primary">Out</span>
              </h1>
              <Image
                src="/signout.png"
                alt="SignOut"
                width={30}
                height={30}
                className="rounded-md cursor-pointer hover:animate-bounce duration-2000  "
                onClick={async () => {
                  "use server";
                  await signOut();
                }}
              />
            </div>
            <div className="flex gap-5">
              <h1 className="text-white font-poppins text-xl">
                {session.user?.name}
              </h1>
              <Image
                src={session.user?.image || "/unknown.png"}
                alt={session.user?.name || "User"}
                width={35}
                height={35}
                className="rounded-md  "
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center gap-4 p-5">
            <h1 className="text-white font-poppins text-lg font-semibold">
              Sign<span className="text-primary">In</span>
            </h1>
            <Image
              src="/Google.jpg"
              alt="Google"
              width={50}
              height={50}
              className="rounded-3xl cursor-pointer hover:animate-bounce duration-2000 "
              onClick={async () => {
                "use server";
                await signIn("google");
              }}
            />
            <Image
              src="/github.png"
              alt="GitHub"
              width={35}
              height={35}
              className="rounded-3xl cursor-pointer hover:animate-bounce duration-2000 bg-white "
              onClick={async () => {
                "use server";
                await signIn("github");
              }}
            />
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
