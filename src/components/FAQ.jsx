import React from 'react'
import { FaPlus } from "react-icons/fa";

function FAQ() {
    const faqImage = new URL("../assets/faq.jpg", import.meta.url).href;

  return (
    <div className='-mx-12 px-12 bg-neon-green pt-24 pb-24'>
        <div className='flex justify-start items-center space-x-40 pb-10'>
            <div className='text-[5rem] font-medium'>FAQ</div>
            <div className='w-[55vw] text-[1.05rem] leading-7 tracking-tight'>
                Discover solutions to commonly asked questions in our FAQ section. Don't 
                hesitate to get in touch with us for further clarification or to discuss 
                any inquiries you may have. We're always available to assist you!
            </div>
        </div>
        <div className='flex justify-between'>
            <ul className='space-y-1'>
                <li className='bg-white p-4 rounded-2xl'>
                    <div className='flex items-center justify-between'>
                        <div>What does your web design process entail?</div>
                        <FaPlus className='text-white bg-black rounded-full py-2 text-3xl'/>
                    </div>
                    {/* <div>
                        We believe in a collaborative approach! We start with a kickoff 
                        meeting to understand your brand, vision, and goals for the 
                        website. You'll be involved every step of the way – from initial 
                        design concepts to development and launch. We'll keep you in the loop 
                        and ensure you approve everything before we move forward.
                    </div> */}
                </li>
                <li className='bg-white p-4 rounded-2xl'>
                    <div className='flex items-center justify-between'>
                        <div>How long does it take to design and develop a website?</div>
                        <FaPlus className='text-white bg-black rounded-full py-2 text-3xl font-bold'/>
                    </div>
                    {/* <div>
                        Every website is unique! The duration of our projects can vary based on 
                        their size and complexity. On average, expect around 45 days for completion. 
                        However, rest assured, every moment is dedicated to crafting a digital masterpiece 
                        that resonates with your audience.
                    </div> */}
                </li>
                <li className='bg-white p-4 rounded-2xl'>
                    <div className='flex items-center justify-between'>
                        <div>Do you provide ongoing support and maintenance for websites?</div>
                        <FaPlus className='text-white bg-black rounded-full py-2 text-3xl font-bold'/>
                    </div>
                    {/* <div>
                        Yes, we offer phone and email support during business hours to answer any questions 
                        you might have. Additionally, we provide website maintenance services to keep your 
                        site running smoothly and securely.
                    </div> */}
                </li>
                <li className='bg-white p-4 rounded-2xl'>
                    <div className='flex items-center justify-between'>
                        <div>Can you help with website hosting and domain registration?</div>
                        <FaPlus className='text-white bg-black rounded-full py-2 text-3xl font-bold'/>
                    </div>
                    {/* <div>
                        Absolutely! We can host your website on our lightning-fast servers, guaranteeing 
                        speed and security. Plus, we offer domain registration to get you started hassle-free.
                    </div> */}
                </li>
                <li className='bg-white p-4 rounded-2xl'>
                    <div className='flex items-center justify-between'>
                        <div>Do you offer responsive design for mobile devices?</div>
                        <FaPlus className='text-white bg-black rounded-full py-2 text-3xl font-bold'/>
                    </div>
                    {/* <div>
                        You bet! In today's mobile-first world, we prioritize responsive web design. 
                        This means your website will automatically adjust to perfectly fit any screen size, 
                        whether it's a desktop computer, tablet, or smartphone.
                    </div> */}
                </li>
            </ul>
            <div>
                <img
                    className='w-[580px] h-[490px] object-cover' 
                    src={faqImage}
                />
            </div>
        </div>
    </div>
  )
}

export default FAQ