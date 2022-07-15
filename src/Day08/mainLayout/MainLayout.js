import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function MainLayout() {
	const navigation = [
    { name: 'Region', href: 'region', current: false },
    { name: 'Employee', href: 'employee', current: false },
    { name: 'Baru', href: 'baru', current: false }
	]

	return (
		<div>
			<h2>Main Layout</h2>
        <nav className="px-2">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <main>
          {/* Page title & actions */}
          <Outlet />
        </main>
		</div>
	)
}
