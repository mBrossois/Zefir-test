export const ModalHomeFields = ({item, value}: HomeFields) => (
  <div key={item} className="flex justify-between w-full pb-3">
    <div className="flex flex-row justify-between w-full">
      <span className="text-sm font-medium">{item === 'priceFormatted' ? 'price' : item }: </span>
      <span className="text-sm">{value}</span>
    </div>
  </div>
)

