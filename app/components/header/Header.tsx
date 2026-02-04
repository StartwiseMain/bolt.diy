import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';

export function Header() {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames('flex items-center px-4 border-b h-[var(--header-height)]', {
        'border-transparent': !chat.started,
        'border-wl-elements-borderColor': chat.started,
      })}
    >
      <div className="flex items-center gap-2 z-logo text-wl-elements-textPrimary cursor-pointer">
        <div className="i-ph:sidebar-simple-duotone text-xl" />
        <a href="/" className="text-2xl font-semibold text-accent flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 32" className="w-[120px] h-[32px]">
            <defs>
              <linearGradient id="header-logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="[stop-color:#3B82F6]" />
                <stop offset="100%" className="[stop-color:#1D4ED8]" />
              </linearGradient>
            </defs>
            <text
              x="10"
              y="24"
              fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="20"
              fontWeight="700"
              fill="url(#header-logo-gradient)"
              letterSpacing="-0.5"
            >
              white label
            </text>
          </svg>
        </a>
      </div>
      {chat.started && ( // Display ChatDescription and HeaderActionButtons only when the chat has started.
        <>
          <span className="flex-1 px-4 truncate text-center text-wl-elements-textPrimary">
            <ClientOnly>{() => <ChatDescription />}</ClientOnly>
          </span>
          <ClientOnly>
            {() => (
              <div className="">
                <HeaderActionButtons chatStarted={chat.started} />
              </div>
            )}
          </ClientOnly>
        </>
      )}
    </header>
  );
}
