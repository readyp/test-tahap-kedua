import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useGetUserQuery } from '../store/api/home-api'
import { CarouselMain } from '../components/CarouselMain'
import { UserDetail } from '../components/UserDetail'
import { useLazyGetMenuQuery } from '../store/api/menu-api'
import { MainPageSkeleton } from '../components/skeletons/MainPageSkeleton'

type MainPageProps = Record<string, never>

const MainPage: React.FC<MainPageProps> = () => {
  const { data: userData, isLoading } = useGetUserQuery()
  const [triggerMenu] = useLazyGetMenuQuery()

  useEffect(() => {
    // prefect menu
    triggerMenu(undefined, true)
  }, [triggerMenu])

  return (
    <div className="flex h-screen flex-col justify-between bg-gray-50">
      <Header />

      <main className="container mx-auto flex flex-col flex-1 space-y-4 mt-4">
        {isLoading ? (
          <MainPageSkeleton />
        ) : userData ? (
          <>
            <UserDetail user={userData.result} />
            <CarouselMain banners={userData.result.banner} />
          </>
        ) : (
          <h1 className="text-6xl text-red-500 font-semibold">Something Went Wrong</h1>
        )}
      </main>
      <Footer />
    </div>
  )
}

export { MainPage }
