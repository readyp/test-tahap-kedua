const delayFn = async (ms: number = 750) => {
  await new Promise((r) => setTimeout(r, ms))
}

export { delayFn }
