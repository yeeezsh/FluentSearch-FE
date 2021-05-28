export function checkStatus(
  wait: number,
  excute: number,
  finish: number,
): { color: string; status: string } {
  let color = '';
  let status = '';

  if (finish > 0 && excute === 0 && wait === 0) {
    color = 'green';
    status = 'FINISH';
  } else if (excute > 0) {
    color = 'orange';
    status = 'RUNNING';
  } else if (wait > 0 && excute === 0) {
    color = 'purple';
    status = 'WAITING';
  }
  return { color, status };
}
