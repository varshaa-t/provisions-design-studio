import React from 'react'
import { GoPlus } from "react-icons/go";

function FAQ() {
    const faq = new URL("../assets/faq.jpg", import.meta.url).href;

  return (
    <div>
        <div>
            <div>FAQ</div>
            <div>
                Discover solutions to commonly asked questions in our FAQ section. Don't 
                hesitate to get in touch with us for further clarification or to discuss 
                any inquiries you may have. We're always available to assist you!
            </div>
        </div>
        <div>
            <ul>
                <li>
                    <div>
                        <div>What does your web design process entail?</div>
                        <GoPlus />
                    </div>
                    <div>
                        We believe in a collaborative approach! We start with a kickoff 
                        meeting to understand your brand, vision, and goals for the 
                        website. You'll be involved every step of the way – from initial 
                        design concepts to development and launch. We'll keep you in the loop 
                        and ensure you approve everything before we move forward.
                    </div>
                </li>
                <li>
                    <div>
                        <div>How long does it take to design and develop a website?</div>
                        <GoPlus />
                    </div>
                    <div>
                        Every website is unique! The duration of our projects can vary based on 
                        their size and complexity. On average, expect around 45 days for completion. 
                        However, rest assured, every moment is dedicated to crafting a digital masterpiece 
                        that resonates with your audience.
                    </div>
                </li>
                <li>
                    <div>
                        <div>Do you provide ongoing support and maintenance for websites?</div>
                        <GoPlus />
                    </div>
                    <div>
                        Yes, we offer phone and email support during business hours to answer any questions 
                        you might have. Additionally, we provide website maintenance services to keep your 
                        site running smoothly and securely.
                    </div>
                </li>
                <li>
                    <div>
                        <div>Can you help with website hosting and domain registration?</div>
                        <GoPlus />
                    </div>
                    <div>
                        Absolutely! We can host your website on our lightning-fast servers, guaranteeing 
                        speed and security. Plus, we offer domain registration to get you started hassle-free.
                    </div>
                </li>
                <li>
                    <div>
                        <div>Do you offer responsive design for mobile devices?</div>
                        <GoPlus />
                    </div>
                    <div>
                        You bet! In today's mobile-first world, we prioritize responsive web design. 
                        This means your website will automatically adjust to perfectly fit any screen size, 
                        whether it's a desktop computer, tablet, or smartphone.
                    </div>
                </li>
            </ul>
            <div>
                <img src={faq}/>
            </div>
        </div>
    </div>
  )
}

export default FAQ