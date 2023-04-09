const Hero = ({heading, message}) => {
    return (
        <div className="flex items-center justify-center h-screen mb-[10rem] bg-fixed bg-cover bg-center custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="text-white p-5 z-[2] mt-12">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                <button className="border px-8 py-2">Book</button>
            </div>
        </div>
    );
};

export default Hero;