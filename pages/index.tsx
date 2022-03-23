import type {NextPage} from 'next';
import {getRandomHomes} from '../business/getRandomHomes';

import {HomeList} from '../components/HomeList';
import {Layout} from '../components/Layout';
import {useState} from 'react';

interface Props {
  homes: Home[]
}

const Index: NextPage<Props> = ({homes}: Props) => {
  const [homesFiltered, setHomesFiltered] = useState(homes);

  // Filters on homes, based on the input of the search field
  function handleChangeValue(event: string) {
    setHomesFiltered(homes.filter(home => home.address.toLowerCase().includes(event.toLowerCase())));
  }

  return (
    <Layout onFilter={handleChangeValue}>
      <HomeList homes={homesFiltered}/>
    </Layout>
  )
};

export async function getServerSideProps() {
  return {
    props: {
      homes: await getRandomHomes()
    }
  };
}

export default Index;
