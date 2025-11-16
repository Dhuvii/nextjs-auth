import Image from "next/image";
import Link from "next/link";
import SigninForm from "./SigninForm";

const page = () => {
  const signinBannerImage: string | null = null;
  return (
    <section className="@container w-full h-dvh flex flex-col overflow-hidden">
      <div className="flex flex-1 w-full overflow-hidden">
        {/* banner */}
        {signinBannerImage && (
          <div className="w-full h-full p-1 hidden @6xl:flex">
            <div className="size-full relative rounded-2xl overflow-hidden">
              <Image
                fill
                className="h-full object-cover"
                src={signinBannerImage}
                alt="Signin banner image"
              ></Image>
            </div>
          </div>
        )}
        {/* banner */}

        {/* form */}
        <div className="w-full h-dvh flex flex-col overflow-hidden">
          <header className="w-full flex items-center justify-between gap-10 px-5 pt-5">
            {/* logo */}
            <h1 className="text-2xl font-black text-gray-800">Next Auth</h1>
            {/* logo */}

            {/* link */}
            <p className="text-xs text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                className="font-semibold text-gray-800 hover:underline"
                href={"register"}
              >
                Register
              </Link>
            </p>
            {/* link */}
          </header>

          {/* form */}
          <div className="flex-1 my-10 w-full px-5 overflow-y-auto flex flex-col items-center-safe justify-start">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Sign in to your account
            </h2>

            <p className="text-xs mt-1 text-gray-600 text-center text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>

            <div className="w-full max-w-sm mt-10">
              <SigninForm />
            </div>
          </div>
          {/* form */}
        </div>
        {/* form */}
      </div>
    </section>
  );
};

export default page;
