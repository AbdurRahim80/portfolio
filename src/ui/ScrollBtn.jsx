import { useEffect } from "react";
import { MdArrowCircleUp } from "react-icons/md";

const ScrollBtn = () => {
    useEffect(() => {
        const scrollBtn = document.querySelector(".scrollBtn");

        const scrollFunction = () => {
            if(window.scrollY > 300) {
                scrollBtn.style.display = "block"
            } else {
                scrollBtn.style.display = "none"
            }
        }

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
        window.addEventListener("scroll", scrollFunction)
        scrollBtn.addEventListener("click", scrollToTop)
    }, [])
    // scrollBtn.addEventListener('click',scrollToTop)

    return (
        <div className="fixed bottom-12 right-5 z-50 cursor-pointer border-2 bg-purple-700 border-designColor hover:bg-black duration-300  p-1 scrollBtn">
            <MdArrowCircleUp size={34} />
        </div>
    );
};

export default ScrollBtn;