import { useRouter } from 'next/router';
import fetch from 'node-fetch';

export default function Person({ ownerList }) {
  const router = useRouter();

  return <pre>{JSON.stringify(ownerList, null, 4)}</pre>;
}
Person.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const response = await fetch(
    `http://localhost:4000/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`
  );
  const ownerList = await response.json();
  return {
    ownerList,
  };
};
