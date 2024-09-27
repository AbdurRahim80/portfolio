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
                            <p>This tourist spot website allows users to explore and add tourist spots from various Asian countries.  The home page displays six tourist spot cards, a contact section, and a footer. Users can register by providing their name, email, photo, and password, and once logged in, their photo and name appear in the navbar. The all tourist spots page is public and displays all spots, while the add tourist spot page allows logged-in users to contribute new spots. The my list page shows the spots users have added, with options to update or delete them.</p>
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
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href=" https://github.com/AbdurRahim80/asiatourtism-client" target="_blank" className="text-xs lg:text-base">Client repo</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="https://github.com/AbdurRahim80/asiatourtism-server" target="_blank" className="text-xs lg:text-base">Server repo</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaLifeRing /> <a href=" https://asiatourtism.web.app/" target="_blank" className="text-xs lg:text-base">Live</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second project */}
                <div data-aos="fade-left" data-aos-duration="2000" className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8 mt-8 lg:relative">
                    <div className="w-full lg:w-1/2 h-80 object-contain rounded-lg overflow-hidden ">
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
                            <p>This blog site allows users to explore, create, edit, and delete blog posts. The homepage displays recent posts with titles, summaries, and images. Users can register or log in to manage their own posts, with profile details shown in the navbar. The site includes category filters for easy navigation and demonstrates user authentication, CRUD functionality, and responsive design.</p>
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
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaLifeRing /> <a href="https://spectacular-cocada-435348.netlify.app/" target="_blank" className="text-xs lg:text-base">Live</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="https://github.com/AbdurRahim80/bytebraze-p-1" target="_blank" className="text-xs lg:text-base">Github</a></p>

                            </div>
                        </div>
                    </div>
                </div>
                {/* third project */}
                {/* <div data-aos="fade-right" data-aos-duration="2000" className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8 lg:relative">
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
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="" className="text-xs lg:text-base">Client repo</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaGithub /><a href="" className="text-xs lg:text-base">Server repo</a></p>
                                <p className="inline-flex items-center gap-1 border border-slate-700 rounded-md hover:border-slate-500 p-1 duration-300"><FaLifeRing /> <a href="" className="text-xs lg:text-base">Live</a></p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </Container>
    );
};

export default Project;