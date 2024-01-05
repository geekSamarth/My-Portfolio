import React from 'react'
import { Icon } from '@iconify/react';
function Skills() {
  return (
    <section className='min-h-screen bg-slate-900 flex justify-center items-center'>
      <h1 className="text-xl md:text-4xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-8">
        <span className="text-4xl md:text-8xl"><Icon icon="vscode-icons:file-type-html" /></span>
      </div>
    </section>
  )
}

export default Skills
Skills