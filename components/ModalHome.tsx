import {ModalHomeFields} from './ModalHomeFields';

export const ModalHome = (home: Home) => {
  return (
    <div>
      <img className="w-full h-full bg-cover" src={home.picture} alt="home picture"/>
      <div className="w-full p-4 mb-1 overflow-hidden">
        <div className="py-2">
          <i className="cursor-pointer far fa-heart"></i>
          <span className="text-base font-bold">Information</span>
        </div>


        { // Adds fields from a home object
          Object.keys(home).map(key => {
            if (key === 'id' || key === 'picture' || key === 'price') return null
            return (
              <ModalHomeFields key={key} item={key} value={home[key as keyof typeof home] as string}></ModalHomeFields>
            )
          })}

      </div>

    </div>
  )
}
