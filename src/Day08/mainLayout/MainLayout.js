/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'Dashboard', href: 'dashboard', current: true },
  { name: 'Region', href: 'region', current: false },
  { name: 'Employee', href: 'employee', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
console.log(navigation.name);

export default function MainLayout() {
  return (
    <>
      {
				/*
      	This example requires updating your template:

  	    ```
  	    <html class="h-full bg-gray-100">
    	  <body class="h-full">
      	```
    		*/
			}
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-teal-700">
            {({ open }) => (
              <>
                <div className="flex justify-between h-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                            ? 'bg-teal-900 text-white'
                            : 'text-gray-300 hover:bg-teal-800 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>

          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 sm:px-0">
                <Outlet/>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
    </>
  )
}