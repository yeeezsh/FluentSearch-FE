function withPayload<T>() {
  return (t: T): { payload: T } => ({ payload: t });
}

export default withPayload;
