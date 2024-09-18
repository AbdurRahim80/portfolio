
import { photo2 } from '../assets';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { FaCode } from "react-icons/fa6";

const About = () => {
    const textArray = [
        { title: "JavaScript", link: "React" },
        { title: "React Js", link: "about", },
        { title: "Node Js", link: "experience" },
        { title: "Express Js", link: "project" },
        { title: "Firebase", link: "Contact" },
        { title: "MongoDB", link: "Contact" },
    ]
    return (
        <Container id="about" className=' lg:py-32 flex flex-col gap-6'>
            <SectionTitle titleNo="01" title="About me" />
            <div className='flex flex-col md:flex-row lg:flex-row gap-6'>
                <div className='w-full  md:w-2/3 font-medium flex flex-col'>
                    <p className='text-lg text-slate-400 '>I'm a passionate and dedicated MERN stack developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. My goal is to leverage my skills to build dynamic, scalable, and efficient web applications. I thrive in collaborative environments and am always eager to learn and adopt new technologies.</p>
                    <div className='grid grid-cols-2 py-10 '>
                        {textArray.map(item => (
                            <a key={item.title} className='flex text-xl hover:text-white/80 items-center gap-2 mt-2' href="">
                                <FaCode className='text-designColor/80 ' />
                                {item.title}</a>
                        ))}
                    </div>
                </div>
                <div className='w-full lg:w-1/3 h-96 relative group'>
                    <div className=' absolute w-full h-96  rounded-lg'>
                        <div className='w-full h-full relative z-20 flex '>
                            <img src={photo2} alt="profile photo" className='rounded-lg   lg:w-full object-cover   duration-300'/>
                            <div className='hidden lg:inline-block w-full h-96 absolute rounded-lg group-hover:bg-designColor/20  duration-300' />
                        </div>
                    </div>
                    <div className='hidden lg:inline-flex  border-2 border-designColor w-full h-96  group-hover:translate-x-2 group-hover:translate-y-2  rounded-lg transition-transform duration-300 '/>
                </div>
            </div>
        </Container>
    );
};

export default About;