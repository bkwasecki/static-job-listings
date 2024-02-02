import React from 'react';

//  {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "./images/photosnap.svg",
//     "new": true,
//     "featured": true,
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
// };


const JobBoardComponent = ({ job: {id, company, logo, isNew, featured, position, role, level, postedAt, contract, location,languages, tools}, handleTagClick,
}) => {
    const tags = [role, level,...languages,...tools];
    


return (
    <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded 
    ${
        featured && 'border-l-4 border-teal-500 border-solid'
        } sm:flex-row sm:my-4`}>
        <div>
            <img className='-mt-16 mb-4 w-20 h-20 sm:h-24 sm:w-24 sm:my-0' src={logo} alt={company} />
        </div>
        <div className='flex flex-col justify-between ml-4'>
            <h3 className='font-bold text-xl text-teal-500'>
                {company}
                {isNew && <span className='bg-teal-500 text-teal-100 
                font-bold m-2 py-1 px-2 rounded-full uppercase text-sm'>NEW</span>}
                {featured && <span className='bg-gray-800 text-white 
                font-bold py-1 px-2 rounded-full uppercase text-sm'>Featured</span>}
                </h3>
            <h2 className='font-bold text-xl my-2'>{position}</h2>
            <p className='text-gray-700'>
                {postedAt} · {contract} · {location}
            </p>
        </div>
        <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
            {tags ? tags.map(tag =>
                        <span 
                        onClick={() => 
                        handleTagClick(tag)}
                        className=' cursor-pointer text-teal-500 bg-teal-100
                        font-bold mr-4 mb-4 p-2 rounded sm:mb-0'>{tag}</span>) : '' }
            
        </div>
    </div>
)

} 

export default JobBoardComponent;