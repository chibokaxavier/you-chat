import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";

const signin = ({ providers }) => {
  return (
    <div>
      <Head>
        <title>
          Sign In Page
        </title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-[70px] px-14 text-center">
        <img className="w-80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_uDcJjkIyIyhOGTL645LLX0bw8DJEtG8ig&usqp=CAU" />
        <p className="font-xs italic">
          {" "}
          This is not a REAL app, it is built for Educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 text-white  rounded-lg"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
