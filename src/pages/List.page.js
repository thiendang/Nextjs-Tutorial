import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

export default function List({ ownerList }) {
  return (
    <div>
      {ownerList.length > 0 && ownerList.map((e) => (
        <div>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>Navigation to {e.ownerName}'s {e.vehicle}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4000/vehicles');
  const ownerList = await response.json();
  console.log(ownerList)
  return {
    ownerList: ownerList,
  };
};
