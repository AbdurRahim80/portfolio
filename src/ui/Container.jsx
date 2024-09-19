import { twMerge } from "tailwind-merge";

const Container = ({ children, className, id }) => {
    const tailwMerge = twMerge(
        "max-w-screen-lg  mx-auto px-4  lg:px-6 ", className
    );
    return (
        <div id={id} className={tailwMerge}>
            {children}
        </div>
    );
};

export default Container;