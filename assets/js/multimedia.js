class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }
  setInicio() {
    console.log("Este metodo es para realizar un cambio en la URL del video");
  }
}
export default Multimedia;
