import React, { useState } from 'react'
import { Cascader } from 'antd'

const LazyOptions = ({ optionLists, ...arg }) => {
   const [options, setOptions] = useState(optionLists)

   const onChange = (value, selectedOptions) => {
      console.log(value, selectedOptions)
   }
   const loadData = (selectedOptions) => {
      console.log(selectedOptions)
      const targetOption = selectedOptions[selectedOptions.length - 1]
      targetOption.loading = true

      // load options lazily
      // setTimeout(() => {
      //    targetOption.loading = false
      //    targetOption.children = [
      //       {
      //          label: `${targetOption.label} Dynamic 1`,
      //          value: 'dynamic1',
      //          loading: false,
      //          isLeaf: false
      //       },
      //       {
      //          label: `${targetOption.label} Dynamic 2`,
      //          value: 'dynamic2',
      //          loading: false,
      //          isLeaf: false
      //       }
      //    ]
      //    setOptions([...options])
      // }, 1000)
   }
   function filter(inputValue, path) {
      return path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
   }

   return <Cascader showSearch={{ filter }} options={options} loadData={loadData} onChange={onChange} changeOnSelect {...arg} />
}
export default LazyOptions
