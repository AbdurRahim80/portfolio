
import { useState } from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import WorkCard from './WorkCard';

const Experience = () => {
    const [workReactBD, setWorkReactBD] = useState(true);
    const [workJavaScriptBD, setWorkJavaScriptBD] = useState(false);
    const [workExpressBD, setWorkExpressBD] = useState(false);
    const [workFirebaseBD, setWorkFirebaseBD] = useState(false);
    const [workMongoBD, setWorkMongoBD] = useState(false);
    const [workNextJsBD, setWorkNextJsBD] = useState(false);

    const handleReact = () => {
        setWorkReactBD(true);
        setWorkJavaScriptBD(false);
        setWorkExpressBD(false);
        setWorkFirebaseBD(false);
        setWorkMongoBD(false);
        setWorkNextJsBD(false)
    }

    const handleJs = () => {
        setWorkReactBD(false);
        setWorkJavaScriptBD(true);
        setWorkExpressBD(false);
        setWorkFirebaseBD(false);
        setWorkMongoBD(false);
        setWorkNextJsBD(false)
    }
    const handleExpress = () => {
        setWorkReactBD(false);
        setWorkJavaScriptBD(false);
        setWorkExpressBD(true);
        setWorkFirebaseBD(false);
        setWorkMongoBD(false);
        setWorkNextJsBD(false)
    }
    const handleFirebase = () => {
        setWorkReactBD(false);
        setWorkJavaScriptBD(false);
        setWorkExpressBD(false);
        setWorkFirebaseBD(true);
        setWorkMongoBD(false);
        setWorkNextJsBD(false)
    }
    const handleMong = () => {
        setWorkReactBD(false);
        setWorkJavaScriptBD(false);
        setWorkExpressBD(false);
        setWorkFirebaseBD(false);
        setWorkMongoBD(true);
        setWorkNextJsBD(false)
    }
    const handleNextJs = () => {
        setWorkReactBD(false);
        setWorkJavaScriptBD(false);
        setWorkExpressBD(false);
        setWorkFirebaseBD(false);
        setWorkMongoBD(false);
        setWorkNextJsBD(true)
    }

    return (
        <Container
            id="experience"
            className='my-10'>
            <SectionTitle className="text-base" titleNo="02" title="Where I have work" />
            <div className='flex flex-col lg:flex-row  gap-16'>
                <ul className=' ml-8 mt-4 my-3 grid grid-cols-2  md:grid-cols-3  h-16 lg:grid-cols-1'>
                    <li
                        onClick={handleReact}
                        className={`${workReactBD ? 'border-l-designColor text-designColor' : 'border-l-black/80 text-gray-300'}
                        border-l-2 bg-transparent text-lg px-3 hover:text-gray-100 hover:border-gray-100 duration-400 cursor-pointer mt-2
                        `}>ReactBD</li>
                    <li
                        onClick={handleJs}
                        className={`${workJavaScriptBD ? 'border-l-designColor text-designColor' : 'border-l-black/80 text-gray-300'}
                        border-l-2 bg-transparent text-lg px-3 hover:text-gray-100 hover:border-gray-100 duration-400 cursor-pointer mt-2
                        `}>ReactBD</li>
                    <li
                        onClick={handleExpress}
                        className={`${workExpressBD ? 'border-l-designColor text-designColor' : 'border-l-black/80 text-gray-300'}
                        border-l-2 bg-transparent text-lg px-3 hover:text-gray-100 hover:border-gray-100 duration-400 cursor-pointer mt-2
                        `}>ReactBD</li>
                    <li
                        onClick={handleFirebase}
                        className={`${workFirebaseBD ? 'border-l-designColor text-designColor' : 'border-l-black/80 text-gray-300'}
                        border-l-2 bg-transparent text-lg px-3 hover:text-gray-100 hover:border-gray-100 duration-400 cursor-pointer mt-2
                        `}>ReactBD</li>
                    <li
                        onClick={handleMong}
                        className={`${workMongoBD ? 'border-l-designColor text-designColor' : 'border-l-black/80 text-gray-300'}
                        border-l-2 bg-transparent text-lg px-3 hover:text-gray-100 hover:border-gray-100 duration-400 cursor-pointer mt-2
                        `}>ReactBD</li>
                    <li
                        onClick={handleNextJs}
                        className={`${workNextJsBD ? 'border-l-designColor text-designColor' : 'border-l-black/80 text-gray-300'}
                        border-l-2 bg-transparent text-lg px-3 hover:text-gray-100 hover:border-gray-100 duration-400 cursor-pointer mt-2
                        `}>ReactBD</li>

                </ul>
                <div className='mt-6'>
                    {workReactBD &&
                        <WorkCard
                            jobTitle="MernStack"
                            jobTag="@ReactBD"
                            date="18/7/24"
                            detailsOne="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsTwo="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsThree="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                        />}
                    {workJavaScriptBD &&
                        <WorkCard
                            jobTitle="Software"
                            jobTag="@ReactBD"
                            date="18/7/24"
                            detailsOne="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsTwo="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsThree="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                        />}
                    {workExpressBD &&
                        <WorkCard
                            jobTitle="Web"
                            jobTag="@ReactBD"
                            date="18/7/24"
                            detailsOne="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsTwo="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsThree="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                        />}
                    {workFirebaseBD &&
                        <WorkCard
                            jobTitle="Firebase"
                            jobTag="@ReactBD"
                            date="18/7/24"
                            detailsOne="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsTwo="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsThree="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                        />}
                    {workMongoBD &&
                        <WorkCard
                            jobTitle="BackEnd"
                            jobTag="@ReactBD"
                            date="18/7/24"
                            detailsOne="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsTwo="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsThree="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                        />}
                    {workNextJsBD &&
                        <WorkCard
                            jobTitle="Machine"
                            jobTag="@ReactBD"
                            date="18/7/24"
                            detailsOne="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsTwo="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                            detailsThree="ipsum dolor sit amet consectetur adipisicing elit. Velit commodi dolores dignissimos qui! Nesciunt, officia vero quaerat sapiente libero tempore? Est earum ex corporis odit maiores reprehenderit provident sequi commodi."
                        />}
                </div>

            </div>
        </Container>
    );
};

export default Experience;