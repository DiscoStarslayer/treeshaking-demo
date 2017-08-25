const keepMe = () => {
  console.log("Please keep me!");
}

const dontKeepMe = () => {
  console.log("Don't keep me, and you won't because I am treeshakeable");
}

export {
  keepMe,
  dontKeepMe
};
