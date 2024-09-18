import { hand } from "../assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Contact = () => {
    return (
        <Container id="contact" className='py-24 '>
            <SectionTitle className="text-base" titleNo="05" title="Contact Me" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-10 border-2 border-slate-600 p-4 rounded-lg w-full">
                <div className=" w-full lg:w-1/3">
                    <img src={hand} alt="" className="rounded-lg" />
                    <h1 className=" text-xl font-semibold mt-6">Find me on E-mail</h1>
                    <h3 className="text-xl">mdrahim.nil2005@gmail.com</h3>
                    <h1 className=" text-xl font-semibold mt-6">Find me on </h1>
                    <h1 className="text-xl">WhatsApp/Phone </h1>
                    <h3 className="text-xl">+8801918136968</h3>
                </div>
                <div className="flex-1 w-full">
                    <form className="space-y-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">Your Name</label>
                                <input type="text" id="name" placeholder="*Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">Your email</label>
                                <input type="email" id="email" placeholder="*Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">subject</label>
                            <input type="text" id="subject" placeholder="*Subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="subject" id="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">Message</label>
                            <textarea type="text" id="subject" placeholder="*Your Message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <div className="flex-1">
                            <button className="uppercase p-2.5 w-full border border-primaryColor hover:border hover:border-white  rounded-lg bg-purple-800  hover:bg-purple-900 font-semibold hover:font-bold duration-300 ">send message</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="mt-28 text-center -mb-16 text-sm">
                <p>Copyright © 2024 - All right reserved by Abdur Rahim</p>
            </div>
        </Container>
    );
};

export default Contact;