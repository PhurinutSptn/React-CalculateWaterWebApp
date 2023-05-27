import React from 'react'
import { useState } from 'react'

const WaterPerDay = () => {
    const [Weight,setWeight] = useState<number>(0)
    const [Water,setWater] = useState<string>('X')

    const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
    }

    const handleOnClick = () => {
        setWater(String(Weight*2.2*30/2))
    }

  return (
    <>
        <h1 className='title'>ควรดื่มน้ำวันละเท่าไหร่?</h1>
        <h1 className='value'>{Water} มล.</h1>
        <form>
            <input type="text" id="Weight" name="weight" onChange={onChangeWeight} placeholder='น้ำหนักของคุณ (กิโลกรัม)'/>
        </form>
        <button className='cal-btn' onClick={handleOnClick}>คำนวณ</button>
    </>
  )
}

export default WaterPerDay