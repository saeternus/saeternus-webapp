import {
  FaGlobe,
  FaUsers,
  FaClock,
  FaSuitcase,
  FaChartLine,
  FaLightbulb,
  FaLaptop,
  FaBook,
} from 'react-icons/fa';
const features = [
  {
    icon: <FaLaptop />,
    title: 'Work From Anywhere',
    description: 'Your workspace, your choice. Be a digital nomad if you like!',
  },
  {
    icon: <FaUsers />,
    title: 'Team Up with the Best',
    description: 'Join forces with the top 1% of professionals in your field.',
  },
  {
    icon: <FaClock />,
    title: 'Flexible Schedules',
    description: 'Claim your autonomy. Set your own schedule.',
  },
  // {
  //   icon: <FaSuitcase />,
  //   title: 'Vacations & Holidays',
  //   description:
  //     'Refresh with 2 weeks of paid vacation and get all your local holidays off.',
  // },
  // {
  //   icon: <FaGlobe />,
  //   title: 'Diverse Network',
  //   description: 'Connect with 4,000+ professionals across 50+ countries.',
  // },
  {
    icon: <FaBook />,
    title: 'Upskill Avenues',
    description: 'Thrive with mentorship, training, and comprehensive courses.',
  },
  {
    icon: <FaChartLine />,
    title: 'Growth Possibilities',
    description:
      "As we rise, so can you. That's the story of our CIO, VP of Talent, and hundreds of others.",
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovative Global Projects',
    description:
      'We help 100+ industry sectors seeking game-changing tech solutions.',
  },
];

export default function WhyUs() {
  return (
    <div className='  bg-white py-8'>
      <div className='container mx-auto mb-12 px-4 '>
        <h2 className='mb-4 text-center text-4xl font-bold text-gray-900'>
          Why Choose Us?
        </h2>
        <p className='mb-10 text-center text-lg text-gray-600'>
          Join a company where new ideas are always welcome. Let’s drive
          innovation and redefine the tech landscape together.
        </p>

        <div className='container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-start space-x-4'>
              <div className='text-3xl text-primary'>{feature.icon}</div>
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
