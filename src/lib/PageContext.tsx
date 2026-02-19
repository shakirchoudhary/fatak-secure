'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import type { PageId } from '@/types'

interface PageContextType {
  currentPage: PageId
  showPage: (page: PageId) => void
  gotoSection: (sectionId: string) => void
}

const PageContext = createContext<PageContextType>({
  currentPage: 'home',
  showPage: () => {},
  gotoSection: () => {},
})

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>('home')

  const gotoSection = useCallback((sectionId: string) => {
    const scroll = () => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (currentPage !== 'home') {
      setCurrentPage('home')
      setTimeout(scroll, 100)
    } else {
      scroll()
    }
  }, [currentPage])

  const showPage = useCallback((page: PageId) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <PageContext.Provider value={{ currentPage, showPage, gotoSection }}>
      {children}
    </PageContext.Provider>
  )
}

export function usePage() {
  return useContext(PageContext)
}
