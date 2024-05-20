import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            <div className="relative p-6 sm:p-12 min-h-[200px] md:min-h-[300px] bg-black bg-opacity-50">
                <div className="relative z-10 text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center">
                    Life is tough. But you know you are tougher. Keep grinding
                    </h1>
                    <p className="text-sm sm:text-md md:text-lg leading-relaxed mb-4 sm:mb-8 text-right">
                        -Mr. Good
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;