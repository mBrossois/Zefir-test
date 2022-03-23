import type {NextPage} from 'next';
import {useEffect, useState} from 'react';

import {HomeList} from '../components/HomeList';
import {Layout} from '../components/Layout';
import {AnimatedLoader} from '../components/AnimatedLoader';

const Homes: NextPage = () => {
  const [homes, setHomes] = useState<Home[]>();
  const [homesFiltered, setHomesFiltered] = useState<Home[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line more/no-then
    fetch('api/homes')
      .then((res) => res.json())
      .then((data: Home[]) => {
        setHomes(data);
        setHomesFiltered(data)
      })
      .finally(() => setLoading(false));
  }, [homes]);

  // Filters on homes, based on the input of the search field
  function handleChangeValue(event: string) {
    if (homes) setHomesFiltered(homes.filter(home => home.address.toLowerCase().includes(event.toLowerCase())));
  }

  if (isLoading) return <AnimatedLoader/>
  else if (!homes) return <p>No home to show, please reload the page!</p>

  return (
    <Layout onFilter={handleChangeValue}>
      <HomeList homes={homesFiltered!}/>
    </Layout>
  );
};


export default Homes;
