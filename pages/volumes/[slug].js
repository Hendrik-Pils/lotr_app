import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data";

export default function VolumeDetails() {
  const router = useRouter();
  const { query } = router;

  // const dog = dogs.find((dog) => dog.id === query.brokkoli);

  const volumeData = volumes.find((volume) => volume.slug === query.slug);
  if (!volumeData) {
    return;
  }

  return (
    <>
      <Link href="/volumes">Back to all volumes</Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        {volumeData.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image
        src={"/images/" + volumeData.slug + ".png"}
        alt={volumeData.title}
        width={140}
        height={230}
      />
    </>
  );
}
