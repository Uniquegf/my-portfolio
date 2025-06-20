import { TbMichelinStarFilled } from "react-icons/tb";



export default function HeadText({ title }: { title: string }) {
    return (
        <div className="text-center my-3 px-6 max-w-5xl mx-auto ">
            <h1 className={`md:text-9xl text-4xl font-extrabold text-[#e0f11f] font-bigShoulders font-[--bigShoulders-font] `}>{title}</h1>
            <TbMichelinStarFilled className="text-[#e0f11f] inline-block text-7xl md:text-5xl mt-5 transition-transform duration-500 " />
        </div>
    );
}