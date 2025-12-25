import React from 'react'

const NotificationBar = () => {
  return (
    <section className="bg-primary py-2 px-4 flex items-center justify-center">
      <p className="text-white text-sm text-center m-0">
        If you would like to support Arcturus and make a charitable donation,{' '}
        <a
          href="https://giving.mit.edu/form?fundId=2530184&source=WBMPP"
          className="text-white underline hover:text-primary-light"
        >
          click here
        </a>
        !
      </p>
    </section>
  )
}

export default NotificationBar
