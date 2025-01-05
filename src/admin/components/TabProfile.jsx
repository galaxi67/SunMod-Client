import React from 'react'
import { Tabs } from 'antd'
import VisionMisionForm from './VisionMisionForm'
import ProfilSumod from './ProfilSumod'
import KenapaSumod from './KenapaSumod'

const onChange = ( key ) => {
  console.log( key )
}



export default function TabProfile( { products, renderFormattedDescription, setSelectedProduct, setNewData } ) {
  const ProfilSumodContent = ( <ProfilSumod
    products={products}
    renderFormattedDescription={renderFormattedDescription}
    setSelectedProduct={setSelectedProduct}
    setNewData={setNewData}
  /> )
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
      children: ProfilSumodContent, // Insert ProfilSumod component here
    },
    {
      key: '2',
      label: 'Visi Misi',
      children: VisionMisionContent,
    },
    {
      key: '3',
      label: 'Kenapa Sumod',
      children: KenapaSumodContent // Insert KenapaSumod component here
    },
  ]

  return (
    <div className='py-5 mb-10'>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}
