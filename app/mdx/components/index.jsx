import NextImage from 'next/image'
import {Code} from 'bright'
import {MDXNote} from './mdx-note'
import {MDXImage} from './mdx-image'
import {Tweet} from 'react-tweet'
import Info from '../../components/icons/info'
import Home from '../../components/icons/home'

Code.theme = {
  dark: 'solarized-dark',
  light: 'material-palenight',
  lightSelector: '[data-theme="light"]',
}

export const mdxComponents = {
  pre: ({children, ...props}) => {
    return <Code {...props}>{children}</Code>
  },
  img: MDXImage,
  Image: NextImage,
  Details: ({children, summary, ...props}) => (
    // Necessary due to a hydration error
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Note: MDXNote,
  InfoIcon: Info,
  HomeIcon: Home,

  Tweet: (props) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tweet {...props} />
    </div>
  ),
}
