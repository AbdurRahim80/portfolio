
import Container from './Container';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import { express, mongobd, node, react } from '../assets';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Banner = () => {
    const typewriterArray = ['web developer.', 'MERN Stack Developer.', 'font-end developer']
    // const typewriterArray = ['I build things for a web.', 'Passionate MERN Stack Developer.', 'Love to learn new ideas.']
    return (
        <Container id="home" className='flex flex-col lg:flex-row gap-4' >
            <div className='py-10 nd:py-24 flex flex-col w-full  gap-4 lg:gap-8 md:px-10 xl:px-4 lg:w-3/4'>
                {/* <h3 className='text-2xl font-semibold tracking-wide text-designColor'>Hi, I am  </h3> */}
                <h1 className="text-2xl font-semibold tracking-wide text-designColor">
                    Hi<span className=" inline-block animate-wave">👋🏻</span>, I am
                </h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='text-xl lg:text-4xl font-bold flex flex-col'
                >
                    Abdur Rahim
                    <span className=' font-semibold text-designColor lg:font-bold mt-2 lg:mt-4 uppercase'>
                        <Typewriter
                            options={{
                                strings: typewriterArray,
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='md:max-w-[650px] text-lg '
                >
                    I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love of learning, keen attention to detail and a strong commitment to my work.
                </motion.p>
                {/* <span className='text-designColor text-xl cursor-pointer'><a href="">Learn more</a>
                    <span className='absolute bg-designColor inline-block h-[5px]' />
                </span> */}
                {/* <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    href="" >
                    <span className='text-designColor inline-flex text-xl cursor-pointer h-7  relative overflow-x-hidden group '>Learn more
                        <span className=' absolute bg-designColor h-[1px] w-full bottom-0 left-0 -translate-x-[110%] transition-transform group-hover:translate-x-0 duration-500' />
                    </span>
                </motion.a> */}
                {/* <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                >
                <span className='text-designColor text-xl cursor-pointer relative '>Learn more */}
                {/* <span className='absolute bg-designColor h-[5px] bottom-0' /> */}
                {/* <span className='absolute bg-designColor h-[5px] bottom-0'></span>
                </span>
                
            </motion.a> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 1 }}
                >
                    <h5 className='uppercase font-semibold'>Find with me</h5>
                </motion.div>

                <div className='flex items-center gap-4 lg:-mt-5'>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        href="https://www.linkedin.com/in/md-abdur-rahim-355753286" target='_blank' className='cursor-pointer border flex justify-center items-center border-designColor/70 rounded-full p-2 text-white tracking-wider w-12 h-12 shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 '>
                        <FaLinkedinIn size={24} />
                    </motion.a><motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        href="https://github.com/AbdurRahim80" target='_blank' className='cursor-pointer border flex justify-center items-center border-designColor/70 rounded-full p-2 text-white tracking-wider w-12 h-12 shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 '>
                        <FaGithub size={26} />
                    </motion.a><motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        href="https://www.facebook.com/profile.php?id=100071716281782" target='_blank' className='cursor-pointer border flex justify-center items-center border-designColor/70 rounded-full p-2 text-white tracking-wider w-12 h-12 shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 '>
                        <FaFacebook size={26} />
                    </motion.a>
                </div>

            </div>
            <div className=' flex  items-center gap-8 py-10 w-full lg:w-1/4 lg:mt-16 lg:ml-8 mb-6'>
                <div className='space-y-8'>
                    <img className='animate-pulse-slow w-24' src={mongobd} alt="" />
                    {/* <img className='w-20' src={express} alt="" /> */}
                    <img className='animate-spin-slow  w-24' src={react} alt="" />
                </div>
                <div className='space-y-8'>
                    <img className='animate-pulse-slow w-24' src={express} alt="" />
                    {/* <img className='w-20' src={react} alt="" /> */}
                    <img className='animate-pulse-slow w-24' src={node} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;