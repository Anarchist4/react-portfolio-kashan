import { FaAws, FaRobot } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import {SiPostgresql  } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';

import { motion } from 'framer-motion';


const iconVariants = (duration) => ({

initial:{y:-10},
animate:{
  y:[10,-10],
  transition: {
    duration: duration,
    ease:"linear",
    repeat: Infinity,
    repeatType: "reverse",
  }
}
})


const Technologies = () => {
  return (
  <div className="border-b border-neutral-800 pb-24">
    <motion.h2
    whileInView={{opacity: 1,y:0}}
    initial={{opacity: 0,y:-100}}
    transition={{duration: 1.5}}
    className="my-20 text-center text-4xl">
    Technologies
    </motion.h2>
    
    <motion.div
    whileInView={{opacity: 1,x:0}}
    initialValue={{opacity: 0,x:-100}}
    transition={{duration: 1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
    <motion.div 
    variants={iconVariants(2.5)}
    initial="initial"
    animate="animate"

    className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPython className='text-7xl text-yellow-300'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaRobot className='text-7xl text-orange-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAws className='text-7xl text-black-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDatabase className='text-7xl text-blue-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostgresql className='text-7xl text-sky-400'/>
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src="/icons/power-bi-icon.svg" alt="Power BI" width={70} height={70} />
        </motion.div>
        
        
        
    </motion.div>
    </div>
  )
}

export default Technologies