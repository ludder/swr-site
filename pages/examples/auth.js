import withNextraLayout from '.nextra/layout'

const Layout = withNextraLayout('auth.js')

export default () => {
  return <Layout full title="Authentication">
    <iframe
      src="https://codesandbox.io/embed/swr-auth-tuqtf?fontsize=14&theme=dark&autoresize=1"
      style={{
        width: '100%',
        height: '100%',
        border: 0,
        overflow: 'hidden',
        background: 'rgb(21, 21, 21)'
      }}
      title="SWR - Authentication"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
  </Layout>
}
