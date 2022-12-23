'use client';

import React, { useState } from 'react';
import { cn } from '#/lib/utils';
import { useRouter } from 'next/router';
import useMenuContext from '../../utils/menu-context';

function Dropdownbar({name, open}) {
  return (
    <div className='mt-5 flex'>
      <span 
        className={cn(
          'flex justify-center items-center',
          'before:content-[""] before:mr-4 before:h-0 before:border-y-4 before:border-l-4 before:border-y-transparent before:border-l-black'
        )}
      >
        {name}
      </span>
    </div>
  )
}

function Dropdownlistitem({route, name}) {
  return (
    <div className={cn(
      'flex items-center mb-4',
      'before:content-[""] before:block before:w-1 before:h-1 before:mr-4 before:rounded-full before:bg-[#666] last:mb-0'
      )}
    >
      <a classname='no-underline text-base' href={route}>{name}</a>
    </div>
  )
}

export function RecursiveMenu({ dir }) {
  return (
    <>
    <div>
      {
        dir.map(item => {
          if(item.children) {
            return (
              <div key={item.name}>
                <Dropdownbar name={item.name} />
                <div className='mt-4 h-auto border-l-[#d4d4d4] border-l pl-7'>
                  <RecursiveMenu dir={item.children} />
                </div>
              </div>
            )
          } else {
            return (
              <Dropdownlistitem key={item.name} route={item.route} name={item.name} />
            )
          }
        })
      }
    </div>
    </>
  )
}