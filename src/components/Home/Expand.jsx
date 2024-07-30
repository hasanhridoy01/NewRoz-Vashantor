import img from '../../../public/Images/expand/expandreach.png'

const Expand = () => {
  return (
    <div className="" style={{ backgroundColor: '#F0F0D3' }}>
      <div className="container mx-auto lg:px-14 px-5 lg:py-14 py-5 lg:pt-28 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-16 items-center">
            <div className="">
                
            </div>
            <div className="lg:flex hidden">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Expand;
