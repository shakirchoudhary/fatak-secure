'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import type { PageId } from '@/types'

interface PageContextType {
  currentPage: PageId
  showPage: (page: PageId) => void
}

const PageContext = createContext<PageContextType>({
  currentPage: 'home',
  showPage: () => {},
})

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>('home')

  const showPage = useCallback((page: PageId) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <PageContext.Provider value={{ currentPage, showPage }}>
      {children}
    </PageContext.Provider>
  )
}

export function usePage() {
  return useContext(PageContext)
}
