import Link from "next/link";
import Image from "next/image";

export const Card = ({ event }) => {
  return (
    <Link href={`/${event.id}`}>
      <main className="card__wrapper rounded-xl bg-sky-600 transition duration-150 hover:bg-sky-700 hover:shadow-xl">
        <div>
          <Image
            alt="image"
            className="card__image"
            src={`${process.env.R2_PUBLIC_URL}/${event.image}`}
            width={1600}
            height={900}
          />
        </div>
        <div className="card__body">
          <div className="card__title text-lg font-bold text-white">
            {event.name}
          </div>
          <div className="card__footer text-white">{event.description}</div>
        </div>
      </main>
    </Link>
  );
};
