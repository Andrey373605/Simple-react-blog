import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../router/routes'

export  function AppRouter() {
    return (
        <Routes>
            {routes.map(r=>
                <Route path={r.path} element={r.component}/>
            )}
        </Routes>
    )
}
