import Link from 'next/link';

const people = [
  { vehicle: 'bike', name: 'Bruno' },
  { vehicle: 'car', name: 'John' },
  { vehicle: 'bus', name: 'Thien' },
];

export default function Homepage() {
  return (
    <div>
      {people.map((e) => (
        <div>
          <Link as={`/${e.vehicle}/${e.name}`} href="/[vehicle]/[person]">
            <a>
              Navigation to {e.name}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
