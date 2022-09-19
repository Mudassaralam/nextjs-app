import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("hello next")
  return <Component {...pageProps} />
}
// function MyApp(){
//   return <div>
//     <h1>hello World</h1>
//   </div>
// }

export default MyApp
