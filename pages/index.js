import Head from 'next/head'

import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function Home() {
  const dataOnSubmit = data => {
    localStorage.setItem("data", JSON.stringify(data))
    console.log(data)
  }
  const {control, handleSubmit} = useForm()
  return <form onSubmit={handleSubmit(dataOnSubmit)}>
    <Controller
      name='color'
      control={control}
      render={({
        field: {onChange, value},
        formState
      }) => <Select 
        onChange={onChange}
        options={options}
        // value={value}
        defaultValue={{ value: 'vanilla', label: 'Vanilla' }}
      />}
    />
    <button>Check</button>
  </form>
}
