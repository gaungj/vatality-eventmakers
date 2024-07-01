import { registerAction } from "./registerAction";

export default function Page() {
  return (
    <main className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>
          <form action={registerAction} className="space-y-6">
            <div>
              <label htmlFor="username">Username</label>
              <div className="mt-1">
                <input name="username" type="username" required />
              </div>
            </div>
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
                  required
                />
              </div>
            </div>
            <div>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
