import RickGif from './img/rick.gif';

const divCss = { 
    textAlign: "center",
    width: "100%",
    height: "100%"
}

const imageCss = {
    height: "100vh"
}

export default function Rick() {

  return (
      <div style={divCss}>
          <img src={RickGif} style={imageCss}></img>
      </div>
  )
}