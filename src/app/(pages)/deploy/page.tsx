import Footer from '@/components/global/footer'
import Deploy from '@/components/sections/deploy'
import React from 'react'

const DeployPage = () => {
  return (
    <div className="flex hero min-h-screen flex-col items-center justify-between p-10 md:p-24">
      <Deploy />
      <Footer />
    </div>
  )
}

export default DeployPage