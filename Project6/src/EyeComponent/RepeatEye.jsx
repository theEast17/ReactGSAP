
// eslint-disable-next-line react/prop-types
const RepeatEye = ({rotate}) => {
  return (
    <div className="relative bg-white h-52 w-52 rounded-full flex justify-center items-center">
    <div className="bg-black h-32 w-32 rounded-full relative flex justify-center items-center">
          <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 h-6 w-full -translate-x-[50%] -translate-y-[50%]'>
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </div>
    </div>
  </div>
  )
}

export default RepeatEye