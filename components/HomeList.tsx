import {HomeCard} from './HomeCard';
import {formatPrice} from '../business/formatPrice';

export const HomeList = ({homes}: { homes: Home[] }) => {
  homes.forEach(home => {home.priceFormatted = formatPrice(home.price, home.currency)});
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
      {homes.map(home => <HomeCard key={home.id} {...home} />)}
    </div>
  )

}


