import React from 'react'

import { MainLayout } from '../layouts'
interface Props {
  children: React.ReactNode
}

export default function PageLayout({ children }: Props) {
  const Layout = MainLayout
  return <Layout>{children}</Layout>
}
