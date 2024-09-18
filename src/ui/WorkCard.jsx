
import { motion } from "framer-motion"
import { TiArrowForward } from 'react-icons/ti';

const WorkCard = ({ jobTitle, jobTag, date, detailsOne, detailsTwo, detailsThree }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
        >
            <div className='border rounded-lg p-5 shadow-lg'>
                <h1 className='text-xl '>{jobTitle}<span className='text-designColor'>{jobTag}</span></h1>
                <p className='mt-2'>{date}</p>
                <div className='my-3'>
                    <ul className='space-y-3'>

                        <li className='flex gap-3'>
                            <TiArrowForward size={30} />
                            <p>{detailsOne}</p>
                        </li>
                        <li className='flex gap-3'>
                            <TiArrowForward size={30} />
                            <p>{detailsThree}</p>
                        </li>
                        <li className='flex gap-3'>
                            <TiArrowForward size={30} />
                            <p>{detailsThree}</p>
                        </li>
                    </ul>
                </div>
            </div>

        </motion.div>
    );
};

export default WorkCard;