'use client'
import { useGate } from 'effector-react'
import Categories from '@/components/modules/MainPage/Categories/Categories'
import { MainPageGate } from '@/context/goods'
import BestsellerGoods from '@/components/modules/MainPage/BestsellerGoods'
import NewGoods from '@/components/modules/MainPage/NewGoods'
import { usePageTitle } from '@/hooks/usePageTitle'

const MainPage = () => {
  useGate(MainPageGate)
  usePageTitle('main')

  return (
    <main>
      <Categories />
      <NewGoods />
      <BestsellerGoods />
    </main>
  )
}

export default MainPage
