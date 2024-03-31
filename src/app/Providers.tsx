'use client'

import { CursorFollowerProvider } from '@/contexts/CursorFollowerContext'
import { MountProvider } from '@/contexts/MountContext'
import { NavigationProvider } from '@/contexts/NavigationContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MountProvider>
      <NavigationProvider>
        <CursorFollowerProvider>
          <ThemeProvider defaultDark>{children}</ThemeProvider>
        </CursorFollowerProvider>
      </NavigationProvider>
    </MountProvider>
  )
}

export default Providers
