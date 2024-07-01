"use client";

import { loginAction } from "./loginAction";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  return (
    <main className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Log In
          </h2>
          <form action={formAction} className="space-y-6">
            {state?.status === "success" ? (
              <div className="msg-success">{state.message}</div>
            ) : null}
            {state?.status === "error" ? (
              <div className="msg-error">{state.message}</div>
            ) : null}
            <div>
              <label htmlFor="email">Email</label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email-address"
                  autoComplete="email-address"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  autoComplete="password"
                />
              </div>
            </div>
            <div>
              <button>Log In</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
