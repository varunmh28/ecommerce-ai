import { Header } from "@/components/Header"
import { CartStoreProvider } from "@/lib/store/cart-store-provider"
import { ChatStoreProvider } from "@/lib/store/chat-store-provider"
import { SanityLive } from "@/sanity/lib/live"
import { ClerkProvider } from "@clerk/nextjs"

function Layout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
    <CartStoreProvider>
    <ChatStoreProvider>

        <Header />
    <main>{children}</main>
    <SanityLive />
    </ChatStoreProvider>
    </CartStoreProvider>
    </ClerkProvider>
  )
}

export default Layout