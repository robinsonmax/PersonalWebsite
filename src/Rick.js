import RickGif from './img/rick.gif';

const imageCss = {
    height: "100vh",
    width: "100vw"
}

export default function Rick() {

  return (
        <img src={RickGif} style={imageCss}></img>
  )
}