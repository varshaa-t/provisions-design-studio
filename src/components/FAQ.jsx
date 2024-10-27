import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { motion } from 'framer-motion';

function FAQ({animationProps}) {
    const faqImage = new URL("../assets/faq.jpg", import.meta.url).href;

    const [accordionOpen, setAccordionOpen] = useState(Array(5).fill(false));

    const contents = [{
        question: "What does your web design process entail?",
        answer: "We believe in a collaborative approach! We start with a kickoff meeting to understand your brand, vision, and goals for the website. You'll be involved every step of the way – from initial design concepts to development and launch. We'll keep you in the loop and ensure you approve everything before we move forward."
    }, {
        question: "How long does it take to design and develop a website?",
        answer: "Every website is unique! The duration of our projects can vary based on their size and complexity. On average, expect around 45 days for completion. However, rest assured, every moment is dedicated to crafting a digital masterpiece that resonates with your audience."
    }, {
        question: "Do you provide ongoing support and maintenance for websites?",
        answer: "Yes, we offer phone and email support during business hours to answer any questions you might have. Additionally, we provide website maintenance services to keep your site running smoothly and securely."
    }, {
        question: "Can you help with website hosting and domain registration?",
        answer: "Absolutely! We can host your website on our lightning-fast servers, guaranteeing speed and security. Plus, we offer domain registration to get you started hassle-free."
    }, {
        question: "Do you offer responsive design for mobile devices?",
        answer: "You bet! In today's mobile-first world, we prioritize responsive web design. This means your website will automatically adjust to perfectly fit any screen size, whether it's a desktop computer, tablet, or smartphone."
    }]

    function toggleAccordion(index){
        const newAccordionState = [...accordionOpen];
        newAccordionState[index] = !newAccordionState[index];
        setAccordionOpen(newAccordionState);
    }

  return (
    <div className='-mx-12 px-12 bg-neon-green pt-24 pb-32'>
        <div className='flex justify-start items-center space-x-40 pb-10'>
            <motion.div 
                className='text-[5rem] font-medium'
                {...animationProps}
            >
                FAQ
            </motion.div>
            <motion.div 
                className='w-[55vw] text-[1.05rem] leading-7 tracking-tight'
                {...animationProps}
                transition={{...animationProps.transition, delay: 0.2}}
            >
                Discover solutions to commonly asked questions in our FAQ section. Don't 
                hesitate to get in touch with us for further clarification or to discuss 
                any inquiries you may have. We're always available to assist you!
            </motion.div>
        </div>
        <motion.div 
            className='flex justify-between'
            {...animationProps}
            transition={{...animationProps.transition, delay: 0.4}}
        >
            <div className='bg-white h-full p-4 rounded-2xl tracking-tight text-[1.13rem] leading-7'>
                <div className='w-[36rem] space-y-4 divide-y'>
                {contents.map((content, index) => (
                    <div key={index} className='divide-y pt-4'>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className='flex justify-between w-full items-center pb-2 px-2'
                        >
                            <div>{content.question}</div>
                            {accordionOpen[index] ? 
                                <FaMinus className='bg-black text-white py-2 text-3xl rounded-full'/> :
                                <FaPlus className='bg-black text-white py-2 text-3xl rounded-full'/>
                            }
                        </button>
                        {accordionOpen[index] && 
                            <div className='pb-2 pt-6 px-2'>{content.answer}</div>
                        }
                </div>
                ))}
                </div>
            </div>
            <div>
                <img
                    className='w-[600px] h-[470px] object-cover rounded-3xl' 
                    src={faqImage}
                />
            </div>
        </motion.div>
    </div>
  )
}

export default FAQ