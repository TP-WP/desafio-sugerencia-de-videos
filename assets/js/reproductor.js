import Multimedia from "./multimedia.js";

//IIFE que sera llamada despues
const url_id = (() => {
  let insertaVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url);
  };
  return {
    insertarVideo: (url, id) => insertaVideo(url, id),
  };
})();

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => _id;
  }

  setInicio(tiempo) {
    let url = this.getUrl();
    url += `?start=${tiempo}`;
    document.getElementById(this.getId()).setAttribute("src", url);
  }

  playMultimedia() {
    //llamando la iife
    url_id.insertarVideo(this.getUrl(), this.getId());
    //habria sido tan simple haciendolo asi como sigue
    //document.getElementById(this.getId()).setAttribute("src", this.getUrl());
  }
}
export default Reproductor;
