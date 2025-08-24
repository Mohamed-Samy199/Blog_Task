import { useEffect, useState } from "react";

export default function ScrollUp() {

const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Check if the user has scrolled enough to show the button
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const isVisible = scrollTop > 300;
        setIsVisible(isVisible);
    };

    const scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-purple-700 text-white p-3  md:p-7 w-4 h-4 flex justify-center items-center rounded-full border-2 border-purple-300 fixed bottom-3 right-1 md:right-1/4 z-30">
            <button
                className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    );

}
