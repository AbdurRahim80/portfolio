import { FaGithub, FaLifeRing } from "react-icons/fa";
import { asiatourtism, blog } from "../assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Project = () => {
    return (
        <Container id="project" className='my-20 pt-14'>
            <SectionTitle title="My Recent Projects" titleNo="03" className="" />
            <div className="space-y-24">
                {/* first project */}
                <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8 lg:relative">
                    <div className="w-full lg:w-1/2 rounded-lg overflow-hidden ">
                        <a href="https://asiatourtism.web.app/" target="_blank" className="relative group">
                            <img src={asiatourtism} alt="" className="w-full h-full rounded-lg group-hover:scale-105 duration-300" />
                            <div className="w-full h-full absolute bg-black/20 hover:bg-transparent duration-200 left-0 top-0" />
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 lg:text-right flex flex-col justify-between gap-4  lg:absolute  lg:top-0 lg:right-6 z-10 h-full">
                        <div>
                            <p className="text-designColor">Feature Project</p>
                            <h1 className="text-xl font-bold">Asia Tourist Sports Project </h1>
                        </div>
                        <div className="bg-slate-800 p-2 rounded-md">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur, inventore numquam adipisci perspiciatis dolorum enim. Doloribus impedit unde vero, quidem, eos a accusamus, atque officia et laboriosam odio nobis?</p>
                        </div>
                        <div>
                            <ul className="flex flex-wrap lg:justify-end items-center gap-3 text-slate-400">
                                <li>React.Js</li>
                                <li>MongoDB</li>
                                <li>Express.Js</li>
                                <li>Node.Js</li>
                                <li>Firebase</li>
                            </ul>
                            <div className="flex lg:justify-end items-center gap-3 mt-4">
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href=" https://github.com/AbdurRahim80/asiatourtism-client" target="_blank">Client side</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="https://github.com/AbdurRahim80/asiatourtism-server" target="_blank">Server side</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaLifeRing /> <a href=" https://asiatourtism.web.app/" target="_blank">Live side</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second project */}
                <div data-aos="fade-left" data-aos-duration="2000" className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8 mt-8 lg:relative">
                    <div className="w-full lg:w-1/2 rounded-lg overflow-hidden ">
                        <a href="https://spectacular-cocada-435348.netlify.app/" target="_blank" className="relative group">
                            <img src={blog} alt="" className="w-full h-full rounded-lg group-hover:scale-105 duration-300" />
                            <div className="w-full h-full absolute bg-black/20 hover:bg-transparent duration-200 left-0 top-0" />
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 text-left flex flex-col justify-between gap-4  lg:absolute  lg:top-0 lg:left-6 z-10 h-full">
                        <div>
                            <p className="text-designColor">Feature Project</p>
                            <h1 className="text-xl font-bold">ByteBraze Blogs</h1>
                        </div>
                        <div className="bg-slate-800 p-2 rounded-md">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur, inventore numquam adipisci perspiciatis dolorum enim. Doloribus impedit unde vero, quidem, eos a accusamus, atque officia et laboriosam odio nobis?</p>
                        </div>
                        <div>
                            <ul className="flex flex-wrap items-center gap-3 text-slate-400">
                                <li>React.Js</li>
                                <li>MongoDB</li>
                                <li>Express.Js</li>
                                <li>Node.Js</li>
                                <li>Firebase</li>
                            </ul>
                            <div className="flex flex-wrap justify-start items-center gap-3 mt-4">
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="https://github.com/AbdurRahim80/bytebraze-p-1" target="_blank">Github</a></p>

                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaLifeRing /> <a href="https://spectacular-cocada-435348.netlify.app/" target="_blank">Live side</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third project */}
                <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8 lg:relative">
                    <div className="w-full lg:w-1/2 rounded-lg overflow-hidden ">
                        <a href="https://asiatourtism.web.app/" target="_blank" className="relative group">
                            <img src={asiatourtism} alt="" className="w-full h-full rounded-lg group-hover:scale-105 duration-300" />
                            <div className="w-full h-full absolute bg-black/20 hover:bg-transparent duration-200 left-0 top-0" />
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 lg:text-right flex flex-col justify-between gap-4  lg:absolute  lg:top-0 lg:right-6 z-10 h-full">
                        <div>
                            <p className="text-designColor">Feature Project</p>
                            <h1 className="text-xl font-bold">Asia Tourist Sports Project </h1>
                        </div>
                        <div className="bg-slate-800 p-2 rounded-md">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur, inventore numquam adipisci perspiciatis dolorum enim. Doloribus impedit unde vero, quidem, eos a accusamus, atque officia et laboriosam odio nobis?</p>
                        </div>
                        <div>
                            <ul className="flex flex-wrap lg:justify-end items-center gap-3 text-slate-400">
                                <li>React.Js</li>
                                <li>MongoDB</li>
                                <li>Express.Js</li>
                                <li>Node.Js</li>
                                <li>Firebase</li>
                            </ul>
                            <div className="flex lg:justify-end items-center gap-3 mt-4">
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="">Client side</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="">Server side</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaLifeRing /> <a href="">Live side</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Project;