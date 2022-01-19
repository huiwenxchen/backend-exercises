module.exports = async () => {
  await require('./index').destroy()
  process.exit(200)
}
