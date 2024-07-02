import ctaImg from "../../assets/images/CTA/cta.webP";
const CtaSection = () => {
  return (
    <div className="w-full py-[50px] sm:py-20 animate__animated animate__fadeInUp animate__slow">
      <div className=" flex flex-col justify-start items-center w-[85%] mx-auto max-w-[1400px]">
        <div className="w-full h-[350px] xl:h-[450px] bg-ctabg drop-shadow-md rounded-2xl p-5 flex justify-between items-center mb-8 font-robo">
          <div className="h-full w-full  flex justify-between items-center xl:pr-10">
            <div className=" w-full h-full flex flex-col justify-center items-start">
              <h1 className="text-[32px] md:text-[42px] font-extrabold font-robo text-black">
                Education is not the filling of a pail, but the lighting of a
                fire.
              </h1>
              <h3 className="text-black mt-5">William Butler Yeats</h3>
              <h4 className="text-coloredh4 mt-5">
                We value critical thinking and independent thoughts
              </h4>
            </div>
            {/* image */}
            <div className=" hidden xl:flex justify-end items-center w-full h-full">
              <img className="w-[62%] h-[100%]" src={ctaImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
