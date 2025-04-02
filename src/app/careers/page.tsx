'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { getJobByTitle } from '../../api/jobs/jobs';
import Choose from './component/ChooseUs';

type Job = {
  title: string;
  location: string;
  description: string;
};

const careersData: Job[] = [
  getJobByTitle('Software Engineer') || {
    title: 'Software Engineer',
    location: 'Remote',
    description: 'Develop and maintain high-quality web applications.',
  },
  getJobByTitle('Product Designer') || {
    title: 'Product Designer',
    location: 'Remote',
    description: 'Create user-friendly and visually appealing designs.',
  },
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <header className='py-12 text-center'>
        <h1 className='mb-4 text-4xl font-bold'>
          Join Our Team at <span className='text-primary'>Saeternus</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Help us unlock students&apos; potential around the world.
        </p>
      </header>
      <Choose />
      <section className='my-12'>
        <h2 className='mb-6 text-center text-2xl font-semibold'>
          Current Job Openings
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {careersData.map((job, index) => (
            <Card key={index} className='shadow-lg'>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{job.location}</p>
                <p className='mt-2 text-gray-600'>{job.description}</p>
                <Button className='mt-4' onClick={() => setSelectedJob(job)}>
                  Apply
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Custom Modal */}
      {selectedJob && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='w-[90%] max-w-md rounded-lg bg-white p-6 shadow-lg'>
            <h2 className='text-xl font-bold'>{selectedJob.title}</h2>
            <p className='mt-2 text-gray-600'>{selectedJob.description}</p>
            <p className='mt-2 font-semibold'>
              Location: {selectedJob.location}
            </p>
            <div className='mt-4 flex justify-end'>
              <Button onClick={() => setSelectedJob(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
