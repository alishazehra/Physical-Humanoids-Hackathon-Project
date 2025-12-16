// import React, { JSX } from 'react';
// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Chatbot from '../components/chatbot';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}: Humanoids and Robotics</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>            <Link
//               className="button button--secondary button--lg"
//               to="/intro/what-is-physical-ai">
//               Start Reading 📖
//             </Link>        </div>
//       </div>
//     </header>
//   );
// }




// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Home | ${siteConfig.title}`}
//       description="Explore the world of Physical AI, Humanoids, and Robotics. A hands-on guide to building intelligent systems that interact with the physical world.">
//       <HomepageHeader />
//       <main>
//         <section className={clsx(styles.sectionContainer, styles.welcomeSection)}>
//           <div className="container text--center">
//             <h2 className={styles.welcomeTitle}>Welcome to the World of Physical AI</h2>
//             <ul className={styles.welcomeList}>
//               <li>
//                 Dive deep into the fascinating intersection of artificial intelligence and physical systems.
//                 This book explores how intelligent agents perceive, reason, and act in the real world,
//                 focusing on humanoids, robotics, and their applications.
//               </li>
//               <li>
//                 Whether you're a beginner curious about the future of AI or an experienced engineer looking to expand your knowledge,
//                 you'll find comprehensive guides, hands-on examples, and insightful discussions within these pages.
//               </li>
//               <li>
//                 Building effective Physical AI systems requires understanding several foundational principles that differentiate them from purely software-based AI.
//               </li>
//             </ul>

//           </div>
//         </section>
//         <HomepageFeatures />
//         <section className={styles.finalCallToAction}>
//           <div className="container text--center">
//             <p className={styles.finalEmoji}>🚀🌌🌟</p>
//             <h2 className={styles.finalTitle}>Ready to Build the Future?</h2>
//             <p className={styles.finalText}>
//               Embark on your journey to master Physical AI. Start exploring the chapters now and bring your ideas to life!
//             </p>
//             <div className={styles.buttons}>
//               <Link
//                 className="button button--primary button--lg"
//                 to="/intro/what-is-physical-ai">
//                 Begin Your Adventure
//               </Link>
              
//             </div>
            
//           </div>
          
//         </section>
//         <br />
//       </main>
//     </Layout>
//   );
// }





// import React, { JSX, useState } from 'react';
// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <br />
//         <h2 className="hero__title">{siteConfig.title}: Humanoids and Robotics</h2>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/intro/what-is-physical-ai">
//             Start Reading 📖
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();

//   // Chatbot state
//   const [chatOpen, setChatOpen] = useState(false);
//   const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([]);
//   const [input, setInput] = useState('');

//   const toggleChat = () => setChatOpen(!chatOpen);

//   const handleSend = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { sender: 'user', text: input }]);
//     const botResponse = `Bot: You said "${input}"`;
//     setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
//     setInput('');
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') handleSend();
//   };

//   return (
//     <Layout
//       title={`Home | ${siteConfig.title}`}
//       description="Explore the world of Physical AI, Humanoids, and Robotics. A hands-on guide to building intelligent systems that interact with the physical world.">
       

//       {/* ===================== Chat Button on Top ===================== */}
//       <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
//         <br />
//        <br />
        
//         <button
        
//           onClick={toggleChat}
//           style={{
//             backgroundColor: 'black',
//             color: 'white',
//             border: 'none',
//             borderRadius: '50%',
//             width: '50px',
//             height: '50px',
//             fontSize: '1.5rem',
//             cursor: 'pointer',
//             boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          

//           }}
//         >
          
//           🗨️
          
//         </button>
        

//         {chatOpen && (
//           <div style={{
//             marginTop: '10px',
//             width: '350px',
//             height: '400px',
//             border: '1px solid #ccc',
//             borderRadius: '10px',
//             display: 'flex',
//             flexDirection: 'column',
//             backgroundColor: '#f9f9f9',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            
//           }}>






//             <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
//               {messages.map((msg, idx) => (
//                 <div
                
//                   key={idx}
//                   style={{
//                     textAlign: msg.sender === 'user' ? 'right' : 'left',
//                     margin: '0.5rem 0',
//                     padding: '0.5rem 1rem',
//                     backgroundColor: msg.sender === 'user' ? '#0084ff' : '#e5e5ea',
//                     color: msg.sender === 'user' ? 'white' : 'black',
//                     borderRadius: msg.sender === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0',
//                     display: 'inline-block',
//                     maxWidth: '80%',
                    
//                   }}
//                 >
//                   {msg.text}
//                 </div>
                
//               ))}
//               {/* Close Button */}
// <button
//   onClick={() => setChatOpen(false)} // directly closes chat
//   style={{
//     position: 'absolute',
   
//     right: '8px',
//     background: 'black',
//     border: 'none',
//     fontSize: '1.4rem',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     color: "white",
//     zIndex: 10,
//   }}
// >
//   ×
// </button>
// <br />

//               <h3>Welcome to the AI Assistant</h3>
              

//             </div>
           
//             <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
             
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 style={{ flex: 1, padding: '0.75rem', fontSize: '1rem', border: 'none' }}
//               />
//               <button
//                 onClick={handleSend}
//                 style={{ border: 'none', backgroundColor: '#0084ff', color: 'white', padding: '0 1rem', cursor: 'pointer', fontSize: '1rem' }}
//               >
               
//                 Send
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       {/* ================= End Chat Button ==================== */}

//       <HomepageHeader />

//       <main>
//         <section className={clsx(styles.sectionContainer, styles.welcomeSection)}>
//           <div className="container text--center">
//             <h2 className={styles.welcomeTitle}>Welcome to the World of Physical AI</h2>
//             <ul className={styles.welcomeList}>
//               <li>
//                 Dive deep into the fascinating intersection of artificial intelligence and physical systems.
//                 This book explores how intelligent agents perceive, reason, and act in the real world,
//                 focusing on humanoids, robotics, and their applications.
//               </li>
//               <li>
//                 Whether you're a beginner curious about the future of AI or an experienced engineer looking to expand your knowledge,
//                 you'll find comprehensive guides, hands-on examples, and insightful discussions within these pages.
//               </li>
//               <li>
//                 Building effective Physical AI systems requires understanding several foundational principles that differentiate them from purely software-based AI.
//               </li>
//             </ul>
//           </div>
//         </section>

//         <HomepageFeatures />

//         <section className={styles.finalCallToAction}>
//           <div className="container text--center">
//             <p className={styles.finalEmoji}>🚀🌌🌟</p>
//             <h2 className={styles.finalTitle}>Ready to Build the Future?</h2>
//             <p className={styles.finalText}>
//               Embark on your journey to master Physical AI. Start exploring the chapters now and bring your ideas to life!
//             </p>
//             <div className={styles.buttons}>
//               <Link
//                 className="button button--primary button--lg"
//                 to="/intro/what-is-physical-ai">
//                 Begin Your Adventure
//               </Link>
//             </div>
//           </div>
//         </section>
//         <br />
//       </main>
//     </Layout>
//   );
// }


// import React, { JSX } from 'react';
// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Chatbot from '../components/chatbot';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}: Humanoids and Robotics</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>            <Link
//               className="button button--secondary button--lg"
//               to="/intro/what-is-physical-ai">
//               Start Reading 📖
//             </Link>        </div>
//       </div>
//     </header>
//   );
// }




// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Home | ${siteConfig.title}`}
//       description="Explore the world of Physical AI, Humanoids, and Robotics. A hands-on guide to building intelligent systems that interact with the physical world.">
//       <HomepageHeader />
//       <main>
//         <section className={clsx(styles.sectionContainer, styles.welcomeSection)}>
//           <div className="container text--center">
//             <h2 className={styles.welcomeTitle}>Welcome to the World of Physical AI</h2>
//             <ul className={styles.welcomeList}>
//               <li>
//                 Dive deep into the fascinating intersection of artificial intelligence and physical systems.
//                 This book explores how intelligent agents perceive, reason, and act in the real world,
//                 focusing on humanoids, robotics, and their applications.
//               </li>
//               <li>
//                 Whether you're a beginner curious about the future of AI or an experienced engineer looking to expand your knowledge,
//                 you'll find comprehensive guides, hands-on examples, and insightful discussions within these pages.
//               </li>
//               <li>
//                 Building effective Physical AI systems requires understanding several foundational principles that differentiate them from purely software-based AI.
//               </li>
//             </ul>

//           </div>
//         </section>
//         <HomepageFeatures />
//         <section className={styles.finalCallToAction}>
//           <div className="container text--center">
//             <p className={styles.finalEmoji}>🚀🌌🌟</p>
//             <h2 className={styles.finalTitle}>Ready to Build the Future?</h2>
//             <p className={styles.finalText}>
//               Embark on your journey to master Physical AI. Start exploring the chapters now and bring your ideas to life!
//             </p>
//             <div className={styles.buttons}>
//               <Link
//                 className="button button--primary button--lg"
//                 to="/intro/what-is-physical-ai">
//                 Begin Your Adventure
//               </Link>
              
//             </div>
            
//           </div>
          
//         </section>
//         <br />
//       </main>
//     </Layout>
//   );
// }





import React, { JSX, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RagChatbot from '@site/src/components/Ragchatbot';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <br />
        <h2 className="hero__title">{siteConfig.title}: Humanoids and Robotics</h2>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro/what-is-physical-ai">
            Start Reading 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setChatOpen(!chatOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    const botResponse = `Bot: You said "${input}"`;
    setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Explore the world of Physical AI, Humanoids, and Robotics. A hands-on guide to building intelligent systems that interact with the physical world.">
       

      {/* ===================== Chat Button on Top ===================== */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <br />
       <br />
        
        
        

        {chatOpen && (
          <div style={{
            marginTop: '10px',
            width: '350px',
            height: '400px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            
          }}>






            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
              {messages.map((msg, idx) => (
                <div
                
                  key={idx}
                  style={{
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    margin: '0.5rem 0',
                    padding: '0.5rem 1rem',
                    backgroundColor: msg.sender === 'user' ? '#0084ff' : '#e5e5ea',
                    color: msg.sender === 'user' ? 'white' : 'black',
                    borderRadius: msg.sender === 'user' ? '15px 15px 0 15px' : '15px 15px 15px 0',
                    display: 'inline-block',
                    maxWidth: '80%',
                    
                  }}
                >
                  {msg.text}
                </div>
                
              ))}
              {/* Close Button */}

              
              

            </div>
           
            <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
             
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ flex: 1, padding: '0.75rem', fontSize: '1rem', border: 'none' }}
              />
              <button
                onClick={handleSend}
                style={{ border: 'none', backgroundColor: '#0084ff', color: 'white', padding: '0 1rem', cursor: 'pointer', fontSize: '1rem' }}
              >
               
                Send
              </button>
            </div>
          </div>
        )}
      </div>
      {/* ================= End Chat Button ==================== */}

      <HomepageHeader />

      <main>
        <section className={clsx(styles.sectionContainer, styles.welcomeSection)}>
          <div className="container text--center">
            <h2 className={styles.welcomeTitle}>Welcome to the World of Physical AI</h2>
            <ul className={styles.welcomeList}>
              <li>
                Dive deep into the fascinating intersection of artificial intelligence and physical systems.
                This book explores how intelligent agents perceive, reason, and act in the real world,
                focusing on humanoids, robotics, and their applications.
              </li>
              <li>
                Whether you're a beginner curious about the future of AI or an experienced engineer looking to expand your knowledge,
                you'll find comprehensive guides, hands-on examples, and insightful discussions within these pages.
              </li>
              <li>
                Building effective Physical AI systems requires understanding several foundational principles that differentiate them from purely software-based AI.
              </li>
            </ul>
            <RagChatbot />
          </div>
        </section>

        <HomepageFeatures />

        <section className={styles.finalCallToAction}>
          <div className="container text--center">
            <p className={styles.finalEmoji}>🚀🌌🌟</p>
            <h2 className={styles.finalTitle}>Ready to Build the Future?</h2>
            <p className={styles.finalText}>
              Embark on your journey to master Physical AI. Start exploring the chapters now and bring your ideas to life!
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/intro/what-is-physical-ai">
                Begin Your Adventure
              </Link>
            </div>
          </div>
        </section>
        <br />
      </main>
    </Layout>
  );
}