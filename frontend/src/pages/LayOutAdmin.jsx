import React from 'react'
import SidebarAdmin from '../components/admin/sidebarAdmin'

const LayOutAdmin = ({children}) => {
    return (
        <React.Fragment>
            <div className='flex'>
                <SidebarAdmin />
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default LayOutAdmin