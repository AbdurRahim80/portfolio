import { twMerge } from "tailwind-merge";

const Container = ({ children, className, id }) => {
    const tailwMerge = twMerge(
        "lg:max-w-screen-xl  mx-auto px-4  lg:px-6 ", className
    );
    return (
        <div id={id} className={tailwMerge}>
            {children}
        </div>
    );
};

export default Container;