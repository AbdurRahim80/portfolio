import { Link } from "react-scroll";
import { ARLogo, logo } from "../assets/index";
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const navigation = [
    { title: "Home", link: "home", value: "" },
    { title: "About", link: "about", value: "01", delay: 0.1 },
    { title: "Experience", link: "experience", value: "02", delay: 0.2 },
    { title: "Project", link: "project", value: "03", delay: 0.3 },
    { title: "Contact", link: "contact", value: "04", delay: 0.4 },
]
const Header = () => {
    const [show, setShow] = useState(false);
    const ref = useRef();
    const handleClick = e => {
        if(e.target.contains(ref.current)){
            setShow(false)
        }
    }
    return (
        <div className="sticky top-0 z-50 bg-primaryColor">
            <div className='h-20 shadow-lg shadow-designColor/10 px-4 w-full'>
                <div className="max-w-[1440px] mx-auto flex justify-between items-center h-full">
                    <Link
                    smooth={true}
                    duration={1000}
                    offset={-80}
                     to={navigation[0]?.link}><img src={ARLogo} alt="logo" className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-75 hover:opacity-100 px-1 rounded-lg bg-teal-500 cursor-pointer duration-200" /></Link>
                    <div className="hidden md:inline-flex items-center gap-7">
                        <div className="flex text-base gap-7">
                            {navigation?.map((item, index) => (
                                <Link
                                    to={item?.link}
                                    key={index}
                                    smooth={true}
                                    duration={1000}
                                    offset={-80}
                                    className="font-medium hover:text-designColor duration-300 cursor-pointer">
                                    <motion.p
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.1, delay: item?.delay }}
                                        key={index} className="text-[13px]" >
                                        <span className="hover:text-designColor mr-1">{item?.value}
                                            {item?.value && "."}
                                        </span>
                                        <span className="uppercase tracking-wide">{item?.title}</span>
                                    </motion.p>
                                </Link>
                            ))}
                        </div>
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            href="#" target="_blank" className="text-[13px] text-designColor font-medium px-2    py-2 rounded-md  border-designColor/70 tracking-wider border uppercase hover:bg-slate-700 duration-300">
                            Resume
                        </motion.a>
                    </div>
                    <div onClick={() => setShow(true)} className="md:hidden w-6 h-5 flex flex-col justify-between items-center overflow-hidden cursor-pointer group">
                        <span className="w-full h-[2px] inline-block bg-designColor transform group-hover:translate-x-2 duration-300" />
                        <span className="w-full h-[2px] inline-block bg-designColor transform translate-x-3 group-hover:translate-x-0 duration-300" />
                        <span className="w-full h-[2px] inline-block bg-designColor transform translate-x-1 group-hover:translate-x-2 duration-300" />
                    </div>
                    {show && (
                        <div
                            ref={(node)=>(ref.current=node)}
                            onClick={handleClick}
                            className="w-full h-screen absolute top-0 right-0 flex flex-col items-end md:hidden">
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .1 }}
                                className="w-[70%] rounded-bl-2xl  overflow-y-scroll flex flex-col items-center py-6 bg-[#122240] relative scrollBarNone"
                            >
                                <MdOutlineClose onClick={() => setShow(false)} className="text-3xl text-designColor cursor-pointer absolute top-4 right-4" />
                                <div className="flex flex-col gap-7 mt-6">
                                    <ul className="flex flex-col gap-7">
                                        {
                                            navigation?.map(item => (
                                                <Link
                                                    to={item?.link}
                                                    smooth={true}
                                                    duration={1000}
                                                    offset={-80}
                                                    className="font-semibold 
                                                    
                                                    hover:text-designColor duration-300 cursor-pointer"
                                                    key={item?.title}>
                                                    <motion.li
                                                        // onClick={()=>setShow(false)}
                                                        initial={{ y: -20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.1, delay: item?.delay }

                                                        }
                                                    >
                                                        <span className="hover:text-designColor text-designColor mr-1">{item?.value}
                                                            {item?.value && "."}
                                                        </span>{" "}
                                                        <span className="uppercase tracking-wide">{item?.title}</span>
                                                    </motion.li>
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </motion.div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Header;