import { createEventAction } from "./action";

export default function Page() {
  return (
    <main className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create New Event
          </h2>
          <form action={createEventAction} className="space-y-6">
            <div>
              <label htmlFor="name">Name</label>
              <div className="mt-1">
                <input name="name" type="text" required />
              </div>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <div className="mt-1">
                <input name="description" type="text" required />
              </div>
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <div className="mt-1">
                <input name="location" type="text" required />
              </div>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <div className="mt-1">
                <input name="image" type="file" accept="png" />
              </div>
            </div>
            <div>
              <button>Create Event</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
