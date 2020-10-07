/** @jsx jsx */
import { jsx } from 'theme-ui'
import logOutboundLink from '../utils/logOutboundLink'
import Link from './Link'
import OutboundLink from './OutboundLink'

function Footer() {
  return (
    <footer sx={{ paddingY: 4, borderTop: '1px solid', borderColor: 'border' }}>
      <Link
        as={OutboundLink}
        href="https://twitter.com/dannyeka"
        onClick={() => logOutboundLink('made by @dannyeka')}
        sx={{ fontSize: 1 }}
      >
        Made by @dannyeka
      </Link>
    </footer>
  )
}

export default Footer
