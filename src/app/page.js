import { Header } from "@/components/header";
import Link from "next/link";
import { Card } from "@/components/card";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function Home() {
  const events = await prisma.event.findMany();

  return (
    <main>
      <Header />
      <div className="container flex flex-col items-center m-auto py-12">
        <section className="mb-20">
          <h1>Create and Discover Nearby Events</h1>
          <p className="text-center">Make Connections within Community</p>
        </section>
        <section className="grid grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </section>
      </div>
    </main>
  );
}
