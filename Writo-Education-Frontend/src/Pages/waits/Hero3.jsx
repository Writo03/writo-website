import img from '../../assets/impressed-young-pretty-schoolgirl-wearing-glasses-back-bag-holding-books-raising-finger-isolated-white2 2.png';
import vector from "../../assets/Vector 515.png"

const Herosection = () => {
  return (
    <div className="relative z-10 hero-section bg1">
      <section className="hero relative">
        <div className="hero-text item1">
          <h1><span>Empower your future, excel in your exams.</span></h1>
          <div className='mt-1 mb-3 ml-8'>
            <img src={vector} alt='vector img' />
          </div>
          <p className='text-3xl'>Experience our Writo All India Test Series for a true-to-life exam simulation.</p>
          <button>Enroll now</button>
        </div>
        <div className="hero-image flex justify-center items-center relative mt-2">
          <div className="image-wrapper p-2 rounded-full border-green-800">
            <div 
              className="border-2 responsive border-[#474747] bg-transparent relative rounded-xl square"
            />
            <div 
              className="bg-[#FD980C] absolute rounded-xl square bg-square"
            />
            <img 
              src={img} 
              alt="Descriptive Alt Text"
              className="absolute hero-img"
            />
          </div>
        </div>
        <div className="rectangle-section w-3/6 h-36 bg-[#4BC7B2] absolute" style={{ left: '48%', transform: 'translateX(-50%)', bottom: '-88px' }}>
          <p className='items-center text-center mt-12 text-white text-3xl item1'>Hurry up! Offer on WAITS ends soon</p>
        </div>
      </section>
    </div>
  );
};

export default Herosection;