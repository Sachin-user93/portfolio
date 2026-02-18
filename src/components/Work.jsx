// import React from 'react'

// export default function Work() {
//     const work = [
//         {
//             name: 'SignLingo',
//             icon: './assets/work-1.png', // Ideally, replace this image with a screenshot of your app
//             description: 'Real-time Gesture Recognition (Python/OpenCV)',
//             link: '',
//         },
//         {
//             name: 'AI Thesis Checker',
//             icon: './assets/work-2.png',
//             description: 'Automated Academic Audit Tool (RAG/LLM)',
//             link: '',
//         },
//         {
//             name: 'Personal Cloud Server',
//             icon: './assets/work-3.png',
//             description: 'Debian 12 Dual-Boot Setup',
//             link: '',
//         },
//         {
//             name: 'Vastu House Design',
//             icon: './assets/work-4.png',
//             description: '3D Modeling & Structural Planning',
//             link: '',
//         }
//     ];

//     return (
//         <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
//             <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
//             <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
            
//             {/* UPDATED: Description from your resume interests */}
//             <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//                 Welcome to my portfolio! Here are some of the projects I've built, ranging from AI-driven tools like SignLingo to system optimizations and 3D modeling.
//             </p>

//             <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
//                 {work.map((project) => (
//                     <div key={project.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${project.icon})` }}>
//                         <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
//                             <div>
//                                 <h2 className="font-semibold">{project.name}</h2>
//                                 <p className="text-sm text-gray-700">{project.description}</p>
//                             </div>
//                             <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
//                                 <img src="./assets/send-icon.png" alt="" className="w-5" />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
            
//             <a href="https://github.com/Sachin-Ahirwar" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
//                 Show more on GitHub
//                 <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
//                 <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
//             </a>
//         </div>
//     )
// }



import React from 'react'

export default function Work() {
    // FIXED: Added '/portfolio' to all image paths
    const work = [
        {
            name: 'SignLingo',
            icon: '/portfolio/assets/work-1.png', 
            description: 'Real-time Gesture Recognition (Python/OpenCV)',
            link: '',
        },
        {
            name: 'AI Thesis Checker',
            icon: '/portfolio/assets/work-2.png',
            description: 'Automated Academic Audit Tool (RAG/LLM)',
            link: '',
        },
        {
            name: 'Personal Cloud Server',
            icon: '/portfolio/assets/work-3.png',
            description: 'Debian 12 Dual-Boot Setup',
            link: '',
        },
        {
            name: 'Vastu House Design',
            icon: '/portfolio/assets/work-4.png',
            description: '3D Modeling & Structural Planning',
            link: '',
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
            
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my portfolio! Here are some of the projects I've built.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((project) => (
                    <div key={project.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" 
                         style={{ backgroundImage: `url(${project.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{project.name}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="/portfolio/assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <a href="https://github.com/Sachin-user93" target="_blank" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more on GitHub
                <img src="/portfolio/assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="/portfolio/assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>
        </div>
    )
}
