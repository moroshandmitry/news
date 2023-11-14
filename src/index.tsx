import ReactDOM from 'react-dom/client'
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'

import { client } from 'graphql/services/apollo'
import { ApolloProvider } from '@apollo/client'

import { theme, GlobalStyle } from 'theme'
import { ThemeProvider } from 'styled-components'

import News from 'pages/news/News'
import Article from 'pages/article/[slug]'
import { Header } from 'components/ui/Header'

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<News />} />
            <Route path={'/:article'} element={<Article />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </StyleSheetManager>
)

reportWebVitals()
