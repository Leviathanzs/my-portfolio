import React from 'react';
import Profile from '../images/profile.jpg';
import Image from 'next/image';

const HomeSection = () => {
    return (
        <section id="home" className="container mx-auto h-screen flex items-center px-4">
            <div className="flex flex-col md:flex-row w-full justify-between items-center space-y-8 md:space-y-0 md:space-x-8 bg-white bg-opacity-5 rounded p-1">
                <div className="p-4 w-full max-w-lg text-left md:flex-4">
                    <h2 className="text-5xl font-bold text-neutral-400">Oky Satria W.</h2>
                    <span className="font-thin text-sm">Game Developer | Web Developer</span>
                    <p className="mt-7 text-3xl text-justify font-bold">Welcome to CodeKid, where creativity knows no boundaries. Unleash your imagination and explore endless possibilities.</p>
                </div>
                <div className="p-4 w-full max-w-lg text-left md:flex-1">
                <Image
                  src={Profile}
                  width={500}
                  height={500}
                  className="xl:w-[650px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-white shadow-sm"
                  alt="Picture of the author"
                />
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
