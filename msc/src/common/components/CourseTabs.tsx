'use client';

import { useState } from 'react';
import { ICourse } from '../types/ICourse';

type Props = {
  data: ICourse[];
};

export default function CourseTabs({ data }: Props) {
  const [activeTab, setActiveTab] = useState<'T' | 'L'>('T');

  const groupByDay = (arr: ICourse[]) =>
    arr.reduce((acc: Record<string, ICourse[]>, cur) => {
      if (!acc[cur.day]) acc[cur.day] = [];
      acc[cur.day].push(cur);
      return acc;
    }, {});

  const renderType = (type: 'T' | 'L') => {
    const filtered = data.filter((c) => c.type === type);
    const grouped = groupByDay(filtered);
    const borderColor = type === 'T' ? 'var(--border-teaching)' : 'var(--border-lab)';

    return Object.entries(grouped).map(([day, courses]) => (
      <section key={day} className="mb-8">
        <h2 className="text-xl font-medium text-neutral-900 mb-4 select-text">{day}</h2>
        <div className="flex flex-wrap gap-4">
          {courses.map((course, index) => (
            <article
              key={index}
              className="bg-white rounded-[24px] p-4 w-full md:w-[300px] flex flex-col justify-between shadow-[var(--md-sys-elevation-level1)] hover:shadow-[var(--md-sys-elevation-hover)] transition-shadow cursor-default border border-stone-400"
              style={{ borderLeft: `6px solid ${borderColor}` }}
            >
              {/* <div className="flex justify-between mb-1">
                <span className="text-xs font-normal text-neutral-500 select-text mr-2">{course.code}</span>
                <span className="text-xs font-normal select-text uppercase" style={{ color: borderColor }}>
                  {type === 'T' ? 'Teaching' : 'Lab'}
                </span>
              </div> */}
              <p className="text-sm font-normal mb-4 select-text text-neutral-900 leading-tight">
                <span className="text-xs font-normal text-neutral-500 select-text mr-2">{course.code}</span>
                {course.title}
              </p>
              <p className="text-xs font-normal select-text text-neutral-500">
                {course.start} – {course.end}
              </p>
            </article>
          ))}
        </div>
      </section>
    ));
  };

  const tabClass = (tab: 'T' | 'L') =>
    `py-2 px-4 border-b-4 focus:outline-none transition-all ${activeTab === tab
      ? 'border-blue-600 text-blue-700 font-light'
      : 'border-transparent text-stone-500 hover:text-stone-700'
    }`;

  return (
    <div>
      {/* Tabs */}
      <div className="mb-8 border-b border-stone-300">
        <nav className="flex space-x-4" aria-label="Tabs" role="tablist">
          <button
            onClick={() => setActiveTab('T')}
            className={tabClass('T')}
            role="tab"
            aria-selected={activeTab === 'T'}
          >
            Teaching
          </button>
          <button
            onClick={() => setActiveTab('L')}
            className={tabClass('L')}
            role="tab"
            aria-selected={activeTab === 'L'}
          >
            Lab
          </button>
        </nav>
      </div>

      {/* Panels */}
      <div role="tabpanel" hidden={activeTab !== 'T'}>
        {activeTab === 'T' && renderType('T')}
      </div>
      <div role="tabpanel" hidden={activeTab !== 'L'}>
        {activeTab === 'L' && renderType('L')}
      </div>
    </div>
  );
}
