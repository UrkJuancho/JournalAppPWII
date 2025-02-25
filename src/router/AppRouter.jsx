import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
    return (

        <Routes>
            {/* Login and register */}
            <Route path="/auth/*" element={<AuthRoutes />} />
            {/* JournalApp Content */}
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>

    )
}

