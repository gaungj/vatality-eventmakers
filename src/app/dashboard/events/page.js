import Link from "next/link";
import { Card } from "@/components/card";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function Page() {
  const events = await prisma.event.findMany();

  return (
    <main className="container block items-center m-auto py-12">
      <section className="flex gap-10 items-center mb-6">
        <h2>Events</h2>
        <Link href="/dashboard/events/new">
          <button>Create New Event</button>
        </Link>
      </section>
      <section className="grid grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}
