import React from 'react'
import { Tabs } from 'antd'
import VisionMisionForm from './VisionMisionForm'
import KenapaSumod from './KenapaSumod'


export default function TabProfile( { products, renderFormattedDescription, setSelectedProduct, setNewData } ) {

  const VisionMisionContent = ( <VisionMisionForm /> )
  const KenapaSumodContent = ( <KenapaSumod
    products={products}
    renderFormattedDescription={renderFormattedDescription}
    setSelectedProduct={setSelectedProduct}
    setNewData={setNewData}
  /> )

  const items = [
    {
      key: '1',
      label: 'Profil Sumod',
      children: VisionMisionContent,
    },
    {
      key: '2',
      label: 'Kenapa Sumod',
      children: KenapaSumodContent
    },
  ]

  return (
    <div className='py-5 mb-10'>
      <Tabs defaultActiveKey="1" items={items} centered/>
    </div>
  )
}
