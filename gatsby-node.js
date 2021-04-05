// fixes issue when of images not being loaded when running gatsby develop -H 0,0,0,0 (local)
if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/';
}
