'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { data } from './data'
import { tw } from '@/common/tw/tw'

export default function Timeline() {
  return (
    <div className='py-8'>

      <div className="flex justify-center align-center">
        <div className='bg-neutral-100 text-neutral-800 text-center text-sm font-normal my-5 p-6 border border-neutral-300 rounded-3xl'>
          <div className=''>
            Department of Computer Science
          </div>
          <div className='text-neutral-500'>
            Postgraduate Academic Calendar of Events
          </div>
          <div className='text-neutral-500'>
            Second Semester (14 weeks), 2024/25 Academic Year
          </div>
        </div>
      </div>

      <VerticalTimeline lineColor='#262626'>
        {data.map((item, idx) => (

          <VerticalTimelineElement
            key={idx}
            contentStyle={{ ...tw('bg-neutral-800 text-neutral-200 rounded-xl border border-neutral-200'), boxShadow: 'none' }}
            contentArrowStyle={{ borderRight: '7px solid #262626' }}
            date={item.date}
            dateClassName={'text-xs font-extralight text-neutral-200 md:text-neutral-900 date'}
            textClassName='text-md'
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <div className='h-4 w-4 rounded-full bg-neutral-800'></div>
              </div>
            }
            iconClassName='bg-transparent'
            iconStyle={{ boxShadow: 'none' }}
            style={{ boxShadow: 'none' }}
          >
            <div className='text-sm text-neutral-200'>
              {item.activity}
            </div>
            <div className='flex gap-1 text-neutral-500 text-sm font-light lowercase'>
              {item.week && (
                <div>
                  {item.week}
                </div>
              )}
              {
                item.week && item.time &&
                <div className='font-bold'>
                  /
                </div>
              }
              {item.time && (
                <div className=''>
                  {item.time}
                </div>
              )}
            </div>
          </VerticalTimelineElement>

        ))}
      </VerticalTimeline>
    </div>
  )
}
