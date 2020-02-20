function checkImgSrc(photos) {
  return photos &&
    photos.length !== 0 &&
    photos[0].match(/(https:\/\/)+(res\.)+(cloudinary\.)+(com)+/gm)
    ? photos[0]
    : '';
}

export default checkImgSrc;
