import { bootstrap, css3, express, figma, firebase, github, html5, js, mongobd2, next, node, react2, redux, tailwind } from '../assets';
import Container from './Container';

const Skills = () => {
    return (
        <div>
            <Container id="skills" className="my-32">
                <h1 className='text-3xl font-bold text-center pt-16 my-16'>Skills</h1>
                <div data-aos="zoom-out-up" data-aos-duration="2000" className='flex flex-wrap justify-center items-center gap-16'>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={html5} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>HTML</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={css3} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>CSS</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={tailwind} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Tailwind</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={bootstrap} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Bootstrap</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={js} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>JavaScript</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={react2} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>React</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={next} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Next.js</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={redux} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Redux</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={node} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Node.js</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={express} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Express.js</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={mongobd2} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>MongoDB</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={firebase} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Firebase</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={figma} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Figma</h1>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={github} alt="" className='w-10 h-10' />
                        <h1 className='text-xl font-bold'>Github</h1>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;