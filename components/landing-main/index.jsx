import Link from "next/link";

const LandingContent = () => {
  return (
    <div className="bg-neutral-700/80 rounded-2xl w-1/3 h-2/3 flex flex-col justify-start items-center pt-16 mx-16  px-10 mt-28">
      <p className="mb-10 text-3xl text-cyan-600">
        {" "}
        برترین فیلم‌های تاریخ سینما
      </p>
      <p className="italic text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد،
      </p>
      <div className="flex justify-center items-center  mt-14">
        <Link href="#" className="bg-cyan-600 transition ease-in-out delay-75  hover:scale-125 duration-300 px-8 py-4 mx-6 rounded-2xl hover:bg-white hover:text-cyan-600">لینک اول</Link>
        <Link href="#" className="text-cyan-600 transition ease-in-out delay-75  hover:scale-125 duration-300 bg-white px-8 py-4 rounded-2xl hover:bg-cyan-600 hover:text-white">لینک دوم</Link>
      </div>
    </div>
  );
};

export default LandingContent;
